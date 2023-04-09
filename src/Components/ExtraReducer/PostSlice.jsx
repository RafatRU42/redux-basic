// const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios'




export const fetchPost = createAsyncThunk('posts/fetchPosts', async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data;
})


const postSlice = createSlice({
    name:'posts',
    initialState: {
        isLoading : false,
        posts:[],
        error:null
    },
    extraReducer: (builder) => {
        builder.addCase(fetchPost.pending, (state) =>{
            state.isLoading = true
        }),
        builder.addCase(fetchPost.fulfilled, (state,action) =>{
            state.posts = action.payload,
            state.isLoading = false,
            state.error = null

        }),

        builder.addCase(fetchPost.rejected, (state,action) =>{
            state.error = action.payload,
            state.posts =[],
            state.isLoading = false
        })
    }
})



export default postSlice.reducer;
