import { LinkButton } from '@src/components/atoms/link-button/link-button'
import React from 'react'

export const Navbar = () => {
  return (
    <nav
      className="bg-white py-[12px]"
      role="navigation"
    >
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <LinkButton
            text="Home"
            href="/"
          />
          <LinkButton
            text="Sign in"
            href="/signin"
          />
        </div>
      </div>
    </nav>
  )
}
