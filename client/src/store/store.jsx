 
 import storage from "redux-persist/lib/storage"
 import{ persistReducer} from 'redux-persist'
 import {configureStore} from '@reduxjs/toolkit'
 import thunk from "redux-thunk";
import userInfoSlice from "../slice/userInfoSlice";
import ApiSlice from "../slice/ApiSlice";
import DocumentationSlice from "../slice/DocumentationSlice";
const persistConfig={
    key:"root",
    storage,
   
}

// persisted reducer
 const persistedReducerForUser=persistReducer(persistConfig,userInfoSlice)
 const nonPersistentApiReducer=persistReducer(persistConfig,ApiSlice)
 const docsReducer=persistReducer(persistConfig,DocumentationSlice)

 export const store=configureStore({
reducer:{
    userLogInDetails:persistedReducerForUser,
    ApisSlice:nonPersistentApiReducer,
    docsSlice:docsReducer
},

    middleware:[thunk],

 })