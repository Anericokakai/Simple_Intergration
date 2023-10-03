import { createSlice } from "@reduxjs/toolkit"
import { fetchAvailableApis } from "../Thunks/FecthApis"

const initialState={
    apis:[],
    loading:false,
    apiError:null
}

const ApiSlice=createSlice({
    name:"fetchApis",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAvailableApis.pending,(state)=>{
            state.loading=true
        }).addCase(fetchAvailableApis.fulfilled,(state,action)=>{
            state.apis=action.payload
            state.loading=false
        }).addCase(fetchAvailableApis.rejected,(state,action)=>{
            state.apiError=action.error.message
            state.loading=false
        })
    }
})

export default ApiSlice.reducer