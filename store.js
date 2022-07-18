import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'


//  connect basket slices to  global store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  }
})