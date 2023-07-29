import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { apiProductsSlice } from './apiProductsSlice'

export const store = configureStore({
  reducer: {
    [apiProductsSlice.reducerPath]: apiProductsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProductsSlice.middleware),
})


setupListeners(store.dispatch)
