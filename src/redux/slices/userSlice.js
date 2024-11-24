import { createSlice } from "@reduxjs/toolkit";
import userThunk from "../thunk/userThunk";

const initialState={
    token: null,
    email: null,
    name: null,
    username: null,
    user_id: null,
    photo: null,
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:(create)=>({
        loggedInUser: create.reducer((state, action)=>{
            state.token= action.payload.token;
            state.email= action.payload.email;
            state.name = action.payload.name;
            state.username= action.payload.username;
            state.user_id= action.payload.user_id,
            state.photo= action.payload.photo
        }),
        logoutUser: create.reducer((state,action)=>{
            state.token= null;
            state.email= null;
            state.name = null;
            state.username= null;
            state.user_id= null,
            state.photo= null
        })
    }),
    // extraReducers:(builder)=>{
    //     builder.addCase(userThunk.fulfilled,(state,action)=>{
    //         state.token= action.payload.token;
    //         state.email= action.payload.email;
    //         state.name = action.payload.name;
    //         state.username= action.payload.username;
    //         state.user_id= action.payload.user_id
    //     })
    // }
})

export const {loggedInUser, logoutUser}= userSlice.actions

export default userSlice.reducer;