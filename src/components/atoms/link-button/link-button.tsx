export interface LinkButtonProps {
  text: string
  href: string
}

export const LinkButton = ({ text, href }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className="bg-gray-700 text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      aria-current="page"
      role="link-button"
    >
      {text}
    </a>
  )
}
