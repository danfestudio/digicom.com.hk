import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BannerSlice = {
    value: any;
}

const initialState = {
    value: {}
} as BannerSlice

export const bannerSlice = createSlice({
    name: "bannerSlice",
    initialState,
    reducers: {
        setSelectedBanner: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedBanner} = bannerSlice.actions
export default bannerSlice.reducer