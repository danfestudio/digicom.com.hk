import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../axios/axios"

const initialState = {
    value: {},
    socialMedia: [],
    navbarData: [],
    status: "idle",
    error: "",
    title: ""
}

export const getPreferences: any = createAsyncThunk("preference", async () => {
    const response = await axios.get("preference/")
    return response.data.data
})


export const preferenceSlice = createSlice({
    name: "preferenceSlice",
    initialState,
    extraReducers(builder) {
        builder
            // Blogs
            .addCase(getPreferences.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getPreferences.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.socialMedia = action?.payload?.socialMedia;
                state.navbarData = action?.payload?.navbar;
            })
            .addCase(getPreferences.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
    reducers: {
    }
})

export default preferenceSlice.reducer