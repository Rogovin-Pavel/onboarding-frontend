import { Tabs } from '@src/components/molecules/navbar/navbar'
import type { Location } from '@remix-run/router'

export const getActiveTab = (location: Location): Tabs => {
  const tabname = location.pathname.replace('/', '')
  if (!tabname.length) return Tabs.home
  return Tabs[tabname as keyof typeof Tabs]
}
