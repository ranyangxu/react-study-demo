import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user/reducer'
const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store