import { render, screen } from '@testing-library/react'
import { LinkButton } from '../link-button'

test('LinkButton is rendered', async () => {
  render(<LinkButton />)
  const Component = await screen.findByRole('link-button')

  expect(Component).toBeInTheDocument()
})
