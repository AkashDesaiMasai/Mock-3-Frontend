import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin:false,
  token:""
}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
   Login: (state, action) => {
  state.isLogin = true;
  state.token = action.payload;
},

  },
})

// Action creators are generated for each case reducer function
export const { Login } = AuthSlice.actions

export default AuthSlice.reducer