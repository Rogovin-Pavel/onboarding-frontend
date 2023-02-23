import { screen } from '@testing-library/react'
import { Navbar } from '../navbar'

import { render } from '@src/test-utils'

test('Navbar is rendered', async () => {
  render(<Navbar />)

  const Component = await screen.findByRole('navigation')

  expect(Component).toBeInTheDocument()
})
