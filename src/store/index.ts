import { Dispatch, configureStore, AsyncThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { User } from '@src/types/store/auth'
import { SigninResponse } from '@src/types/api/auth'

import auth from './slices/auth'

const store = configureStore({
  reducer: {
    auth
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAuthDispatch = useDispatch<
  Dispatch<AsyncThunkAction<SigninResponse | null | undefined, User, {}>>
>

export default store
