import Login from '@src/components/organisms/login/login'
import { RootPage } from '@src/pages/root-page'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <div>ErrorPage</div>,
    children: [
      {
        path: '/',
        element: (
          <section
            className="flex flex-col items-center
              gap-[16px]
              text-white
              text-[24px]
              my-auto mx-auto
              w-[600px] p-7"
          >
            Onboarding
          </section>
        )
      },
      {
        path: '/signin',
        element: <Login />
      }
    ]
  }
])
