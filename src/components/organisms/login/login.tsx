import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FormEvent, useState } from 'react'

import { signin } from '@src/store/slices/auth'
import { RootState, useAuthDispatch } from '@src/store'

import Input from '@src/components/molecules/input/input'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const user = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  const authDispatch = useAuthDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (user.accessToken && !user.isLoading) {
      navigate('/')
    }
  }, [user])

  const onSignin = async (event: FormEvent<HTMLFormElement>) => {
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
          {user.isLoading ? 'Loading...' : 'Continue'}
        </button>
      </footer>
    </form>
  )
}
