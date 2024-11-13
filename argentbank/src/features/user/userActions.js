import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001'

export const userProfile = createAsyncThunk(
  'user/infos',
  async (_, {getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken;
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
      const { data } = await axios.post(
        `${backendURL}/api/v1/user/profile`,
        {},
        config
      )
      console.log("Données reçues de l'API:", data);
      // store user's infos in local storage

      console.log(localStorage)
      
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
