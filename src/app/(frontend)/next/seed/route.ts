// SECURITY: Seed endpoint TEMPORARILY enabled for development
// WARNING: This endpoint clears and reseeds the entire database!

import { createLocalReq, getPayload } from 'payload'
import { seed } from '@/endpoints/seed'
import config from '@payload-config'
import { headers } from 'next/headers'

export const maxDuration = 60 // This function can run for a maximum of 60 seconds

export async function GET(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden. Please login to the admin panel first at /admin', { status: 403 })
  }

  try {
    // Create a Payload request object to pass to the Local API for transactions
    const payloadReq = await createLocalReq({ user }, payload)

    await seed({ payload, req: payloadReq })

    return Response.json({ success: true, message: 'Database seeded successfully!' })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error seeding data' })
    return new Response('Error seeding data.', { status: 500 })
  }
}

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })

  try {
    // Create a Payload request object for seeding (no user required for initial seed)
    const payloadReq = await createLocalReq({}, payload)

    await seed({ payload, req: payloadReq })

    return Response.json({ success: true, message: 'Database seeded successfully!' })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Error seeding data' })
    return new Response('Error seeding data.', { status: 500 })
  }
}

/*
// Disabled endpoint - returns 404
export async function GET(): Promise<Response> {
  return new Response('Seed endpoint is disabled for security reasons.', { status: 404 })
}

export async function POST(): Promise<Response> {
  return new Response('Seed endpoint is disabled for security reasons.', { status: 404 })
}
*/
