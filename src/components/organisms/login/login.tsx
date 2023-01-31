import React, { useEffect } from 'react'
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { RootState } from '../../../store';
import { signin, signout } from '../../../store/authReducer';
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery, gql, useLazyQuery } from '@apollo/client';
import { SIGN_IN } from '../../../graphql/mutations';
import { GET_USERS } from '../../../graphql/queries';

export default function Login() {
  const user = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')

  const [login] = useMutation(SIGN_IN)

  const [loadUsers, { called, loading, data }] = useLazyQuery(
    GET_USERS
  );

  const emailHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const passHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
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
    <form onSubmit={signinHandler}>
      <input value={email} placeholder='Type email' onChange={emailHandler} />
      <input value={password} placeholder='Type password' onChange={passHandler} />
      <button type="submit" disabled={!!user.email}>Sign in</button>
      <button disabled={!user.email} onClick={logoutHandler}>Sign out</button>
    </form>
  )
}
