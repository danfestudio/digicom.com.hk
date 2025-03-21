import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface mediaType {
    selectedFolder: any;
}

const initialState: mediaType = {
    selectedFolder: '',
};

export const mediaSlice = createSlice({
    name: "mediaSlice",
    initialState,
    reducers: {
        setSelectedFolder: (state, action: PayloadAction<any>) => {
            state.selectedFolder = action.payload
        },

    }
})

export const { setSelectedFolder } = mediaSlice.actions