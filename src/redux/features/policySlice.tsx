import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PolicySlice = {
    value: any;
}

const initialState = {
    value: {}
} as PolicySlice

export const policySlice = createSlice({
    name: "policySlice",
    initialState,
    reducers: {
        setSelectedPolicy: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedPolicy} = policySlice.actions
export default policySlice.reducer