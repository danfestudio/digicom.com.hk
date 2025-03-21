import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductSlice = {
    value: any;
}

const initialState = {
    value: {}
} as ProductSlice

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setSelectedProduct: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedProduct } = productSlice.actions
export default productSlice.reducer