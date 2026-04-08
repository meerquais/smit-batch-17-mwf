import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetch", async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return  res.json()
});


const postsSlice = createSlice({
    name:"posts",
    initialState:{posts:[], loading:false},
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchPosts.pending, (state)=>{
            state.loading = true;
            console.log("completed pending");
            
        })
        .addCase(fetchPosts.fulfilled,(state , action) =>{
            state.posts = action.payload;
            state.loading = false;
            console.log("fulfilled!");
            
        })
        .addCase(fetchPosts.rejected, (state) =>{
            state.loading = false;
            
        })
    }
});

export default postsSlice.reducer