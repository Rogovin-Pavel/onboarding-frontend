import { render, screen } from '@testing-library/react'
import { LinkButton } from '../link-button'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('LinkButton is rendered', async () => {
  const history = createMemoryHistory()

  render(
    <Router
      location={history.location}
      navigator={history}
    >
      <LinkButton
        text="hi"
        href="/"
      />
    </Router>
  )

  const Button = await screen.findByRole('link-button')

  expect(Button).toBeInTheDocument()
})
