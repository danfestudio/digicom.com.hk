import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface schoolState {
    school: any;
}

const initialState: schoolState = {
    school: ""
}

export const schoolSlice = createSlice({
    name: "schoolSlice",
    initialState,
    reducers: {
        setSchoolDetail: (state, action: PayloadAction<any>) => {
            state.school = action.payload
        }
    }

})

export const { setSchoolDetail } = schoolSlice.actions