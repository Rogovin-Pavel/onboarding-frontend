import { client } from '@src/apollo'
import { SIGN_IN } from '@src/graphql/mutations'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '@src/types/store/auth'
import { SigninResponse } from '@src/types/api/auth'

export const signin = createAsyncThunk<
  // Return type of the payload creator
  SigninResponse | undefined,
  // First argument to the payload creator
  User
>('auth/signin', async (user: User): Promise<SigninResponse | undefined> => {
  const { data } = await client.mutate<{
    login: SigninResponse
  }>({
    mutation: SIGN_IN,
    variables: {
      user
    }
  })

  return data?.login
})
