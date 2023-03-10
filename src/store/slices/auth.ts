import { createSlice } from '@reduxjs/toolkit'

import { User } from '@src/types/store/auth'
import { Loader } from '@src/types/store/loader/loader'
import { signin } from '../actions/auth'

const initialState: User & Loader = {
  name: null,
  email: null,
  password: null,
  accessToken: null,
  isLoading: false
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
    builder.addCase(signin.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(signin.rejected, (state) => {
      state.isLoading = false
    })

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(signin.fulfilled, (state, action) => {
      if (action.payload) {
        const { user, accessToken } = action.payload
        state.accessToken = accessToken
        state.isLoading = false
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
