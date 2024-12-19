import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "@/config/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  data: localStorage.getItem("data") || {},
  role: localStorage.getItem("role") || "",
  permissions: localStorage.getItem("permissions") || {},
};

export const createAccount = createAsyncThunk('/auth/signup', async (data) => {
  try {
    const response = axiosInstance.post("/users/register", data);
    toast.promise(response, {
      loading: 'Wait creating your account',
      success: (data) => {
        return data?.data?.message;
      },
      error: 'Failed to create your account'

    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});

export const login = createAsyncThunk("/auth/signin", async (data) => {
  try {
    const response = axiosInstance.post("users/login", data);
    toast.promise(response, {
      loading: 'Wait! authenticating your account',
      success: (data) => {
        return data?.data?.message;
      },
      error: 'Failed to authenticate your account'
    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});


export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const response = axiosInstance.post("users/logout");
    toast.promise(response, {
      loading: 'Wait! logging out your account',
      success: (data) => {
        return data?.data?.message;
      },
      error: 'Failed to logout your account'
    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log(action?.payload?.data?.data);
        localStorage.setItem("data", JSON.stringify(action?.payload?.data?.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.data?.user?.role);
        localStorage.setItem("permissions", JSON.stringify(action?.payload?.data?.data?.user?.permissions));

        state.isLoggedIn = true;
        state.data = action?.payload?.data?.data;
        state.role = action?.payload?.data?.data?.user?.role;
        state.permissions = action?.payload?.data?.data?.user?.permissions;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.data = {};
        state.role = "";
        state.permissions = {};
      });
  }
});

export default authSlices.reducer;