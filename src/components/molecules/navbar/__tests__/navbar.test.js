import { render, screen } from '@testing-library/react'

import { Navbar } from '../navbar'

test('Navbar is rendered', async () => {
  render(<Navbar />)
  const Component = await screen.findByRole('navigation')

  expect(Component).toBeInTheDocument()
})
