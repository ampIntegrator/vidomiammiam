import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header, Identity } from '@/payload-types'

export async function Header() {
  const [headerData, identityData] = await Promise.all([
    getCachedGlobal('header', 2)(),
    getCachedGlobal('identity', 1)(),
  ])

  return <HeaderClient data={headerData} identity={identityData as Identity} />
}
