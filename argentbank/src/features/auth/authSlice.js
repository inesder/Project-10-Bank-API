import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authActions'



const initialState = {
    loading: false,
    userToken: localStorage.getItem('userToken') || null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {logout: (state) => {
      localStorage.removeItem('userToken');
      state.userToken = null; 
      state.userInfo = null;
    },},
    extraReducers: (builder) => {
      builder
      // login user
    .addCase(userLogin.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(userLogin.fulfilled, (state, { payload }) => {
      console.log("Payload de userLogin.fulfilled:", payload);

      state.loading = false
      state.userToken = payload.body.token
    })
    .addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    },
  })
  
  export const { logout } = authSlice.actions;
  export default authSlice.reducer
