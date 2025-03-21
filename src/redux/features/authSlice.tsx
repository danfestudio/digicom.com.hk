import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type authSlice = {
    value: any;
    token: any;
    authorizedRoles: any;
}

const initialState = {
    value: {},
    token: "",
    authorizedRoles: ['ADMIN', 'SUPERADMIN', 'SCHOOL']
} as authSlice

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<any>) => {
            state.value = JSON.parse(action.payload);
        },
        setToken: (state, action: PayloadAction<any>) => {
            state.token = JSON.parse(action.payload)
        },
        removeToken: (state) => {
            state.token = '',
                state.value = ""
        }
    }
})

export const { setUserDetails, setToken, removeToken } = authSlice.actions
// export default authSlice.reducer