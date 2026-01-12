import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    // Initialize Identity global if doesn't exist
    try {
      await payload.findGlobal({
        slug: 'identity',
      })
    } catch (error) {
      await payload.updateGlobal({
        slug: 'identity',
        data: {
          siteName: 'Upto1',
          slogan: 'Expert en croissance digitale',
          address: {
            city: 'Paris',
            country: 'France',
          },
        },
      })
    }

    // Initialize Socials global if doesn't exist
    try {
      await payload.findGlobal({
        slug: 'socials',
      })
    } catch (error) {
      await payload.updateGlobal({
        slug: 'socials',
        data: {
          iconColor: 'white',
        },
      })
    }

    return Response.json({
      success: true,
      message: 'Globals initialized successfully',
    })
  } catch (error: any) {
    console.error('Error initializing globals:', error)
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
