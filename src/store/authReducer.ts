import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  email: string | null;
  password: string | null;
  accessToken: string | null;
}

const initialState: User = {
  email: null,
  password: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin: (
      state: User,
      action: {
        payload: User;
      }
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.accessToken = action.payload.accessToken;
    },
    signout: (state) => {
      state.email = initialState.email;
      state.password = initialState.password;
    },
  },
});

export const { signin, signout } = authSlice.actions;

export default authSlice.reducer;
