import { createSlice } from "@reduxjs/toolkit";

const livechatslice = createSlice({
  name: "liveslice",
  initialState: [],
  reducers: {
    addliveslice: (state, action) => {
      state.splice(100,1)
      state.unshift(action.payload);
    },
  },
});

export const { addliveslice } = livechatslice.actions;
export default livechatslice.reducer;
