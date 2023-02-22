import { Navbar } from '@src/components/molecules/navbar/navbar'
import { PageTemplate } from '@src/components/templates/page-template/page-template'
import Login from '../components/organisms/login/login'

export const SignInPage = () => {
  return (
    <PageTemplate>
      <Login />
    </PageTemplate>
  )
}
