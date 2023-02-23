import { screen } from '@testing-library/react'
import { Tabs } from '@src/components/molecules/navbar/navbar'
import { render } from '@src/test-utils'
import { LinkButton } from '../link-button'

test('LinkButton is rendered', async () => {
  render(
    <LinkButton
      text={Tabs.home}
      href={Tabs.home}
      onClick={() => {}}
    />
  )

  const Button = await screen.findByRole('link-button')

  expect(Button).toBeInTheDocument()
})
