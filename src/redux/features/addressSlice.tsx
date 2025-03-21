import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../axios/axios"

const BASE_URL = "localstate/"

const initialState = {
    provinces: [],
    districts: [],
    vdcMunicipality: [],
    ward: [],
    status: "idle",
    error: ""
}

export const getProvince: any = createAsyncThunk("location/Province", async () => {
    const response = await axios.get(BASE_URL + "get-provinces")
    // console.log('Provinces', response.data.data)
    return response?.data.data
})

export const getDistricts: any = createAsyncThunk("location/Districts", async (selectedProvince) => {
    const result = await axios.get('localstate/', {
        params: {
            pname: selectedProvince,
        },
    });
    // console.log('districts', result.data.data)
    return result?.data?.data.districts
})
export const getVdcMuni: any = createAsyncThunk("location/VdcMuni", async (selectedDistrict) => {
    const result = await axios.get('localstate/', {
        params: {
            dname: selectedDistrict,
        },
    });
    // console.log('districts', result.data.data)
    return result?.data?.data.municipalities
})
export const getWard: any = createAsyncThunk("location/ward", async (selectedMunicipality) => {
    const result = await axios.get('localstate/', {
        params: {
            mname: selectedMunicipality,
        },
    });
    // console.log('districts', result.data.data)
    return result?.data?.data.wards
})

export const addressSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // ==> normal reducer functions go here
    },
    extraReducers(builder) {
        builder
            // Provinces
            .addCase(getProvince.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getProvince.fulfilled, (state, action) => {
                state.status = "succeeded"
                    state.provinces = action.payload;
                    // state.districts = []
                    // state.vdcMunicipality = []
                    // state.ward = []
            })
            .addCase(getProvince.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

            // Districts
            .addCase(getDistricts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getDistricts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.districts = action.payload;
            })
            .addCase(getDistricts.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

            // Muni
            .addCase(getVdcMuni.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getVdcMuni.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.vdcMunicipality = action.payload;
            })
            .addCase(getVdcMuni.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })

            // Ward
            .addCase(getWard.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getWard.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.ward = action.payload;
            })
            .addCase(getWard.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default addressSlice.reducer;