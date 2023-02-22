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
            text="Sign in"
            href="/signin"
          />
          <LinkButton
            text="Sign up"
            href="/signup"
          />
        </div>
      </div>
    </nav>
  )
}
