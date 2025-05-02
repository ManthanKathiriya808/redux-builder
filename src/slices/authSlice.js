import { createSlice } from "@reduxjs/toolkit";
import Login from "../components/Login";


const authSilce = createSlice({
    name:"auth",
    initialState: {
        auth:true
    },
    reducers:{
        login(state){
            state.auth = true
        },
        logout(state){
            state.auth = false
        }
    }
})

export const {login,logout} = authSilce.actions;
export const authReducer = authSilce.reducer