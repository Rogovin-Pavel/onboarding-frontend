import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormEvent, MouseEvent, useState } from 'react'

import { RootState, useAuthDispatch } from '@src/store'
import { signin, signout } from '@src/store/slices/auth'

import Input from '@src/components/molecules/input/input'

export default function Login() {
  const user = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const authDispatch = useAuthDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setEmail('')
    setPassword('')
    dispatch(signout())
  }

  const onSignin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    authDispatch(
      signin({
        email,
        password
      })
    )
  }

  return (
    <form
      onSubmit={onSignin}
      className="
        flex flex-col items-center
        gap-[16px]
        container
        bg-white
        my-auto mx-auto
        w-[600px] p-7
        shadow-lg rounded-lg
      "
    >
      <Input
        value={email}
        type="email"
        label="Email"
        placeholder="Type email"
        whenChange={setEmail}
      />
      <Input
        value={password}
        type="password"
        label="Password"
        placeholder="Type password"
        whenChange={setPassword}
      />
      <footer className="flex w-full justify-end gap-[20px]">
        <button
          className="rounded-md bg-blue-400 text-white px-3 py-2 hover:bg-blue-500"
          type="submit"
          disabled={!!user.email}
        >
          Sign in
        </button>
        <button
          disabled={!user.email}
          className="rounded-md bg-blue-400 text-white disabled:bg-gray-400 px-3 py-2 hover:bg-blue-500"
          onClick={onSignout}
        >
          Sign out
        </button>
      </footer>
    </form>
  )
}
