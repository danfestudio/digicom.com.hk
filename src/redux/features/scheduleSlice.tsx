import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface toggleState {
    schedule: any;
    eventname: string;
    eventdate: string;
}

const initialState: toggleState = {
    schedule: {},
    eventname: '',
    eventdate: ''
};

export const scheduleSlice = createSlice({
    name: "scheduleSlice",
    initialState,
    reducers: {
        setSelectedSchedule: (state, action: PayloadAction<any>) => {
            state.schedule = action.payload
        },
        setSelectedEventName: (state, action: PayloadAction<any>) => {
            state.eventname = action.payload
        },
        setSelectedEventDate: (state, action: PayloadAction<any>) => {
            state.eventdate = action.payload
        },
    }
})

export const { setSelectedSchedule, setSelectedEventName,setSelectedEventDate } = scheduleSlice.actions