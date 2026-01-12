import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    // Validate email
    if (!email || typeof email !== 'string') {
      return Response.json({ success: false, error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json({ success: false, error: 'Invalid email format' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Check if email already exists
    const existing = await payload.find({
      collection: 'newsletter',
      where: {
        email: {
          equals: email,
        },
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      const subscriber = existing.docs[0]

      // If unsubscribed, reactivate
      if (subscriber.status === 'unsubscribed') {
        await payload.update({
          collection: 'newsletter',
          id: subscriber.id,
          data: {
            status: 'active',
            subscribedAt: new Date().toISOString(),
          },
        })

        return Response.json({
          success: true,
          message: 'Votre abonnement a été réactivé !',
        })
      }

      return Response.json(
        { success: false, error: 'Cet email est déjà inscrit à notre newsletter' },
        { status: 409 },
      )
    }

    // Create new subscriber
    await payload.create({
      collection: 'newsletter',
      data: {
        email,
        status: 'active',
      },
    })

    return Response.json({
      success: true,
      message: 'Merci pour votre inscription !',
    })
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    return Response.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 },
    )
  }
}
