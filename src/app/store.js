import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './../features/redux/apiSlice'



export const store = configureStore({
  reducer: {
    ...rootReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});




setupListeners(store.dispatch);


