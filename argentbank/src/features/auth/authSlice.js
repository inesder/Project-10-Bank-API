import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') || null;


const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
  }
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      // login user
    .addCase(userLogin.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.token
    })
    .addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    },
  })
  
  export default authSlice.reducer
