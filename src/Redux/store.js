import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { apiProductsSlice } from './apiProductsSlice'
import productsReducer from './productsSlice'

export const store = configureStore({
  reducer: {
    [apiProductsSlice.reducerPath]: apiProductsSlice.reducer,
    products:productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProductsSlice.middleware),
})


setupListeners(store.dispatch)
