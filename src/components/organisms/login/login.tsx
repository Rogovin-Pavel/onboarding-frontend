import React, { useEffect } from 'react'
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import { RootState } from '../../../store'
import { signin, signout } from '../../../store/authReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation, useQuery, gql, useLazyQuery } from '@apollo/client'
import { SIGN_IN } from '../../../graphql/mutations'
import { GET_USERS } from '../../../graphql/queries'
import Input from '@src/components/molecules/input/input'

export default function Login() {
  const user = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')

  const [login] = useMutation(SIGN_IN)

  const [loadUsers, { called, loading, data }] = useLazyQuery(GET_USERS)

  const emailHandler = (value: string): void => {
    setEmail(value)
  }

  const passHandler = (value: string): void => {
    setPassword(value)
  }

  const signinHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const { data } = await login({
        variables: {
          user: {
            email,
            password
          }
        }
      })

      const { accessToken } = data.login

      localStorage.setItem('token', accessToken)
      setToken(accessToken)
      loadUsers()

      dispatch(signin({ email, password, accessToken }))
    } catch (error) {
      console.error(error)
    }
  }

  const logoutHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setEmail('')
    setToken('')
    localStorage.removeItem('token')
    setPassword('')
    dispatch(signout())
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <form
      onSubmit={signinHandler}
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
        whenChange={emailHandler}
      />
      <Input
        value={password}
        type="password"
        label="Password"
        placeholder="Type password"
        whenChange={passHandler}
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
          onClick={logoutHandler}
        >
          Sign out
        </button>
      </footer>
    </form>
  )
}
