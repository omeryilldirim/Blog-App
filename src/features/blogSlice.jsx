import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name:"blog",
    initialState:{
        blogs:[],
        categories:[],
        myBlogs:[],
        loading:false,
        error:false
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading = true
            state.error = false
        },
        getBlogsSuccess:(state,{payload})=>{
            state.loading = false
            state.blogs = payload
        },
        getMyBlogsSuccess:(state,{payload})=>{
            state.loading = false
            state.myBlogs = payload
        },
        getCategoriesSuccess:(state,{payload})=>{
            state.loading = false
            state.categories = payload
        },
        fetchFail:(state)=>{
            state.loading = false
            state.error = true
        }
    }
})

export const {fetchStart,getBlogsSuccess,getCategoriesSuccess,fetchFail,getMyBlogsSuccess} = blogSlice.actions
export default blogSlice.reducer