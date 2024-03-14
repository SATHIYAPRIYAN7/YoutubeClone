import { createSlice } from "@reduxjs/toolkit";



const slideslice = createSlice({
    name : "sidebar",
    initialState:{
        toggleMenu: true,
    },
    reducers:{
        addtoggle : (state,action)=>{
           state.toggleMenu = !state.toggleMenu
        },
        removetoggle :(state,action)=>{
            state.toggleMenu = false
        }
    }
})

export const {addtoggle,removetoggle}= slideslice.actions;
export default slideslice.reducer;