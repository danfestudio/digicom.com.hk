import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EventSlice = {
    value: any;
}

const initialState = {
    value: {}
} as EventSlice

export const eventSlice = createSlice({
    name: "createSlice",
    initialState,
    reducers: {
        setSelectedEvent: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedEvent } = eventSlice.actions
export default eventSlice.reducer