import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../axios/axios"

// const BASE_URL = "localstate/"

const initialState = {
    value: {},
    randomBlog: [],
    blogData: [],
    singleBlog: {},
    status: "idle",
    error: "",
    title:""
}

export const getBlogDetails: any = createAsyncThunk("blog", async () => {
    const response = await axios.get("blog")
    return response.data.data
})

export const getSingleBlogDetails: any = createAsyncThunk("singleBlog", async (id) => {
    const response = await axios.get("blog/get-blog/" + id)
    return response.data.data
})

export const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    extraReducers(builder) {
        builder
            // Blogs
            .addCase(getBlogDetails.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getBlogDetails.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.blogData = action.payload.blogs.data;
                state.randomBlog = action.payload.randomBlogs;
            })
            .addCase(getBlogDetails.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            // Single Blog
            .addCase(getSingleBlogDetails.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getSingleBlogDetails.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.singleBlog = action.payload;
            })
            .addCase(getSingleBlogDetails.rejected, (state: any, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
    reducers: {
        setSelectedBlog: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setSelectedBlog } = blogSlice.actions
export default blogSlice.reducer