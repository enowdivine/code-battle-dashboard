import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import floodServices from "../services/floodServices";

const initialState = {
  data: [],
};

export const floodData = createAsyncThunk("flood/flood", async (thunkAPI) => {
  try {
    return await floodServices.floodData();
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const floodSlice = createSlice({
  name: "flood",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(floodData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = floodSlice.actions;

export default floodSlice.reducer;
