import { createSlice } from '@reduxjs/toolkit'
import { userProfile } from './userActions'
import { updateUserProfile } from './userActions'

const initialState = {
    loading: false,
    userInfos: JSON.parse(localStorage.getItem('userInfos')) || null,
    error: null,
    success: false, 
  }
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
      builder
      
    .addCase(userProfile.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(userProfile.fulfilled, (state, { payload }) => {
      console.log("Payload de userProfile.fulfilled:", payload);
      localStorage.setItem('userInfos', JSON.stringify(payload.body))
      state.loading = false
      state.userInfos = payload.body
    })
    .addCase(userProfile.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    .addCase(updateUserProfile.pending, (state)=>{
      state.loading = true
      state.error = null
    })
    .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
      state.userInfos = { ...state.userInfos, ...payload.body}
      state.loading = false;
      localStorage.setItem('userInfos',JSON.stringify(state.userInfos))
    })
    .addCase(updateUserProfile.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
    },
  })
  
  export default userSlice.reducer
