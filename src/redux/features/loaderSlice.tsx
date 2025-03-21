import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LoaderSlice = {
    value: any;
}

const initialState = {
    value: true,
} as LoaderSlice

export const loaderSlice = createSlice({
    name: "LoaderSlice",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.value = true
        },
        stopLoading: (state) => {
            state.value = false
        },
    }
})

export const { startLoading, stopLoading } = loaderSlice.actions