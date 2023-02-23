import { Tabs } from '@src/components/molecules/navbar/navbar'
import type { Location } from '@remix-run/router'
import { getActiveTab } from './../routes'

describe('getActiveTab', () => {
  test('empty pathname', () => {
    const tab: Tabs = getActiveTab({
      pathname: ''
    } as Location)

    expect(tab).toBe(Tabs.home)
  })

  test('index tab', () => {
    const tab: Tabs = getActiveTab({
      pathname: '/'
    } as Location)

    expect(tab).toBe(Tabs.home)
  })

  test('signin tab', () => {
    const tab: Tabs = getActiveTab({
      pathname: `/${Tabs.signin}`
    } as Location)

    expect(tab).toBe(Tabs.signin)
  })

  test('signup tab', () => {
    const tab: Tabs = getActiveTab({
      pathname: `/${Tabs.signup}`
    } as Location)

    expect(tab).toBe(Tabs.signup)
  })
})
