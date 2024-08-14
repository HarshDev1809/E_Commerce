import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = process.env.REACT_APP_URL;

export const getItems = createAsyncThunk("item/getItems",async()=>{
    try{
        const response = await axios.get(`${URL}`);
        console.log(response);
        return response.data;
    }catch(err){
        return err;
    }
})

const itemSlice = createSlice({
    name: "items",
    initialState : {
        items: [],
        status : "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getItems.pending, (state)=>{
            console.log("Fetching posts pending...");
            state.status = "loading";
        })
        .addCase(getItems.fulfilled, (state,action)=>{
            console.log("Fetching posts fulfilled:", action.payload);
            state.status = "succeeded";
            state.items = action.payload;
        })
        .addCase(getItems.rejected,(state,action)=>{
            console.error("Fetching posts rejected:", action.payload);
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default itemSlice.reducer;