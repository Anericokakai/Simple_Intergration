import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_information: [],
  LogInStatus: null,
  token: "",
  theme:"dark"
  
};

const userInfoSlice = createSlice({
  initialState,
  name: "user_info_slice",
  reducers: {
    set_userData: (state, action) => {
      state.user_information = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogInStatus: (state, action) => {
      state.LogInStatus = action.payload;
    },
    setTheme:(state,action)=>{
      state.theme=action.payload
    }
  },
});
export default userInfoSlice.reducer
export const {set_userData,setLogInStatus,setToken,setTheme}=userInfoSlice.actions
