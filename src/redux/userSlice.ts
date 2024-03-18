import { createSlice } from "@reduxjs/toolkit";
import User from '../utils/types';

const initialState:User = {
    name : "",
    username: "",
    email: ""
}

type UserEmail = {
    email: string
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state,action) => {
            const {name, username, email}:User = action.payload
             state.name = name
             state.username = username
             state.email = email
        }, 
        changeEmail: (state,action) => {
            const {email}:UserEmail = action.payload
            state.email = email
        }
    }
})

export const {addUser, changeEmail} = userSlice.actions
export default userSlice.reducer