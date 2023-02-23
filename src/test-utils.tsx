import React, { ReactElement } from 'react'
import { Router } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'

import store from './store'
import { client } from './apollo'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const history = createMemoryHistory()

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router
          location={history.location}
          navigator={history}
        >
          {children}
        </Router>
      </ApolloProvider>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
