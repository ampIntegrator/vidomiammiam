import { getPayload } from 'payload'
import config from '@payload-config'
import { seedHeaderFooter } from '@/endpoints/seed/header-footer-globals'

export const maxDuration = 60

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })

  try {
    await seedHeaderFooter(payload)
    return Response.json({ success: true, message: 'Header and Footer seeded successfully!' })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error seeding globals' })
    return new Response('Error seeding globals.', { status: 500 })
  }
}
