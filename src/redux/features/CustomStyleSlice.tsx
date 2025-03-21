import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CustomStyleSlice = {
    value: any;
    mainList: any,
    showControls: boolean,
    selectedElement: any,
    constraintsRef: any,
    isPreview: boolean,
    breakpoint: number,
    breakpointList: number[],
    clientSideBreakpoint: number,
}

const initialState = {
    breakpointList: [
        1440,
        1024,
        768,
        425,
        320
    ],
    value: {},
    mainList: [],
    showControls: false,
    isPreview: false,
    breakpoint: 1440,
    selectedElement: {},
    clientSideBreakpoint: 1440,
} as CustomStyleSlice

export const CustomStyleSlice = createSlice({
    name: "CustomStyleSlice",
    initialState,
    reducers: {
        setMainList: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        setShowControls: (state, action: PayloadAction<boolean>) => {
            state.showControls = action.payload
        },
        setSelectedElement: (state, action: PayloadAction<any>) => {
            state.selectedElement = action.payload
        },
        setConstraintsRef: (state, action: PayloadAction<any>) => {
            state.constraintsRef = action.payload
        },
        setIsPreview: (state, action: PayloadAction<boolean>) => {
            state.isPreview = action.payload
        },
        setBreakpoint: (state, action: PayloadAction<number>) => {
            state.breakpoint = action.payload
        },
        setClientSideBreakpoint: (state, action: PayloadAction<number>) => {
            state.clientSideBreakpoint = action.payload
        },
    }
})

export const { setMainList, setShowControls, setSelectedElement, setConstraintsRef, setIsPreview, setBreakpoint, setClientSideBreakpoint } = CustomStyleSlice.actions
export default CustomStyleSlice.reducer