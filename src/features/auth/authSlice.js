import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  email: "",
  confirmationCode: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const authSelector = state => state.auth 