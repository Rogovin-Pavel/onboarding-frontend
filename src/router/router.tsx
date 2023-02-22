import { RootPage } from '@src/pages/root-page'
import { SignInPage } from '@src/pages/sign-in-page'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <div>ErrorPage</div>
  },
  {
    path: '/signin',
    element: <SignInPage />,
    errorElement: <div>ErrorPage</div>
  }
])
