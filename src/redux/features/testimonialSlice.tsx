import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type testimonialSlice = {
    value: any;
}

const initialState = {
    value: {}
} as testimonialSlice

export const testimonialSlice = createSlice({
    name: "testimonialSlice",
    initialState,
    reducers: {
        setSelectedTestimonial: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedTestimonial} = testimonialSlice.actions
export default testimonialSlice.reducer