import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/conterSlice'

export default configureStore({
  reducer: {
    count: counterSlice,
  },
})