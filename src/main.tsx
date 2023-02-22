import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'

import store from './store'
import { router } from './router/router'
import { client } from '@src/apollo'

import { Navbar } from './components/molecules/navbar/navbar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </Provider>
)
