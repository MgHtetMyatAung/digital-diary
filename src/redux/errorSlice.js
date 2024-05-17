import { createSlice } from "@reduxjs/toolkit";
export const errorSlice = createSlice({
  name: "error",
  initialState: { code: null, message: null },
  reducers: {
    addErrorInfo: (state, { payload }) => {
      state.code = payload.code;
      state.message = payload.message;
    },
    removeErrorInfo: (state) => {
      state.code = null;
      state.message = null;
    },
  },
});

export const { addErrorInfo, removeErrorInfo } = errorSlice.actions;
export default errorSlice.reducer;
