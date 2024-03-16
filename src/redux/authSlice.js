import { createSlice } from "@reduxjs/toolkit";
import { apiServices } from "./createApis";
export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    removeAuth: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiServices.contactApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const { removeAuth } = authSlice.actions;
export default authSlice.reducer;
