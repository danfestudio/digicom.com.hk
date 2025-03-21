import { createSlice } from "@reduxjs/toolkit";

type skeletonValues = {
    value: boolean
}

const initialState = {
    value: false
} as skeletonValues

export const skeletonSlice = createSlice({
    name: "skeletonSlice",
    initialState,
    reducers: {
        startSkeletonLoad(state: any) {
            state.value = true
        },
        stopSkeletonLoad(state: any) {
            state.value = false
        }
    }
})


export const { startSkeletonLoad, stopSkeletonLoad } = skeletonSlice.actions