import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategorySlice = {
    value: any;
}

const initialState = {
    value: {}
} as CategorySlice

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedCategory } = categorySlice.actions
export default categorySlice.reducer