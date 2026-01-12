import { getPayload } from 'payload'
import config from '@payload-config'

export const maxDuration = 60

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })

  const usersToCreate = [
    { email: 'admin@uptodemo.com', password: 'admin123', name: 'Admin Upto' },
    { email: 'demo@payloadcms.com', password: 'demo', name: 'Demo User' },
    { email: 'test@test.com', password: 'test', name: 'Test User' },
  ]

  const results = []

  for (const userData of usersToCreate) {
    try {
      const user = await payload.create({
        collection: 'users',
        data: userData,
      })
      results.push({ success: true, email: userData.email, password: userData.password })
    } catch (e: any) {
      results.push({
        success: false,
        email: userData.email,
        password: userData.password,
        error: e.message
      })
    }
  }

  return Response.json({
    message: 'User creation completed',
    results,
    credentials: [
      { email: 'admin@uptodemo.com', password: 'admin123' },
      { email: 'demo@payloadcms.com', password: 'demo' },
      { email: 'test@test.com', password: 'test' },
    ]
  })
}
