import { Navbar } from '@src/components/molecules/navbar/navbar'
import { PageTemplate } from '@src/components/templates/page-template/page-template'
import { Outlet } from 'react-router-dom'

export const RootPage = () => {
  return (
    <PageTemplate>
      <>
        <Navbar />
        <Outlet />
      </>
    </PageTemplate>
  )
}
