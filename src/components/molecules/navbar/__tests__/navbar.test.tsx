import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { Navbar } from '../navbar'
import { createMemoryHistory } from 'history'

test('Navbar is rendered', async () => {
  const history = createMemoryHistory()

  render(
    <Router
      location={history.location}
      navigator={history}
    >
      <Navbar />
    </Router>
  )

  const Component = await screen.findByRole('navigation')

  expect(Component).toBeInTheDocument()
})
