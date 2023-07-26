import { configureStore } from '@reduxjs/toolkit'
import formReducer from './features/formReducer'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        formReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector