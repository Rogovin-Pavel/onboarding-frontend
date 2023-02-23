import { Tabs } from '@src/components/molecules/navbar/navbar'
import { Link } from 'react-router-dom'

export interface LinkButtonProps {
  text: string
  href: Tabs
  active?: Tabs
  onClick: (tab: Tabs) => void
}

export const LinkButton = ({
  href,
  text,
  active,
  onClick
}: LinkButtonProps) => {
  const path = Tabs.home === href ? '/' : `/${href}`
  let className =
    'text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md font-medium'

  className = className + (active === href ? ' bg-gray-900' : ' bg-gray-700')

  return (
    <Link
      to={path}
      className={className}
      role="link-button"
      onClick={() => onClick(href)}
    >
      {text}
    </Link>
  )
}
