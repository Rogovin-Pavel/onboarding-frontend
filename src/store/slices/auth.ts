import { createSlice } from '@reduxjs/toolkit'

import { User } from '@src/types/store/auth'
import { signin } from '../actions/auth'

const initialState: User = {
  name: null,
  email: null,
  password: null,
  accessToken: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signout: (state) => {
      state.name = initialState.name
      state.email = initialState.email
      state.password = initialState.password
      state.accessToken = initialState.accessToken
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signin.fulfilled, (state, action) => {
      if (action.payload) {
        const { user, accessToken } = action.payload
        state.accessToken = accessToken
        state.email = user.email
        state.name = user.name
        localStorage.setItem('token', accessToken)
      }
    })
  }
})

export const { signout } = authSlice.actions
export { signin }

export default authSlice.reducer
