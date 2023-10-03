import { createSlice } from "@reduxjs/toolkit"
import { fetchDocumentation } from "../Thunks/FecthApis"

const initialState={
    docs:[],
    loadingDocs:false,
    docsError:null,
    decodedDocs:``
}

const DocsSlice=createSlice({
    name:"fetchDocs",
    initialState,
    reducers:{
 setDecodedDocs:(state,action)=>{
    state.decodedDocs=action.payload
 }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDocumentation.pending,(state)=>{
            state.loadingDocs=true
        }).addCase(fetchDocumentation.fulfilled,(state,action)=>{
            state.docs=action.payload
            state.loadingDocs=false
        }).addCase(fetchDocumentation.rejected,(state,action)=>{
            state.docsError=action.error.message
            state.loadingDocs=false
        })
    }
})

export default DocsSlice.reducer
export const {setDecodedDocs}=DocsSlice.actions