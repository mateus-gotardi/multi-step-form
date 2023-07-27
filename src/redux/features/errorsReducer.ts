import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        name: Errors,
        email: Errors,
        phone: Errors,
    }
}
type Errors = false | "invalid" | "empty"

const initialState = {
    value: {
        name: false,
        email: false,
        phone: false,
    }
} as InitialState

export const errors = createSlice({
    name: 'errors',
    initialState: initialState,
    reducers: {
        setErrName: (state, action: PayloadAction<Errors>) => {
            state.value.name = action.payload
        },
        setErrEmail: (state, action: PayloadAction<Errors>) => {
            state.value.email = action.payload
        },
        setErrPhone: (state, action: PayloadAction<Errors>) => {
            state.value.phone = action.payload
        },
    }
})

export const { setErrEmail, setErrName, setErrPhone } = errors.actions
export default errors.reducer