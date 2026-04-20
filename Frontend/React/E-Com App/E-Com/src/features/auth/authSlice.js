import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {auth} from "../../firebase/config";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
 } from "firebase/auth";


export const signupUser = createAsyncThunk("auth/signup" , async (data)=>{

    const res = await createUserWithEmailAndPassword(auth , data.email , data.password );

    return res.user;
});


export const loginUser = createAsyncThunk("auth/login" ,  async (data) =>{

    const res = await signInWithEmailAndPassword(auth , data.email , data.password);
    return res.user;
});


export const logoutUser = createAsyncThunk("auth/logout" , async ()=>{
    await signOut(auth);
});


const slice = createSlice({
    name:"auth",
    initialState: {user:null},
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(signupUser.fulfilled, (s,a)=>{
            s.user = a.payload
        })
        .addCase(loginUser.fulfilled, (s,a)=>{
            s.user = a.payload
        })
        .addCase(logoutUser.fulfilled, (s)=>{
            s.user = null;
        })
    }

})

export default slice.reducer;