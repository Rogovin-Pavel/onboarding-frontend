import { LinkButton } from '@src/components/atoms/link-button/link-button'
import { RootState } from '@src/store'
import { signout } from '@src/store/slices/auth'
import React, { useState, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getActiveTab } from '@src/helpers/routes/routes'

export enum Tabs {
  home = 'index',
  signin = 'signin',
  signup = 'signup'
}

export const Navbar = () => {
  const { name } = useSelector((state: RootState) => state.auth)
  const location = useLocation()
  const activeTab = getActiveTab(location)

  const [active, setActive] = useState<Tabs>(activeTab)
  const dispatch = useDispatch()

  const onSignout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    dispatch(signout())
  }

  return (
    <nav
      className="bg-white py-[12px]"
      role="navigation"
    >
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex gap-[16px]">
          <LinkButton
            text="Home"
            href={Tabs.home}
            active={active}
            onClick={setActive}
          />
          {!name?.length && (
            <LinkButton
              text="Sign in"
              href={Tabs.signin}
              active={active}
              onClick={setActive}
            />
          )}
          {name?.length && (
            <button
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id="user-menu-item-2"
              onClick={onSignout}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
