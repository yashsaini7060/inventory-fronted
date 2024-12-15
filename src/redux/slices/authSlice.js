import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {}
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {}
});

export default authSlices.reducer;