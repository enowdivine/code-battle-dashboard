import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersServices from "../services/usersServices";

const initialState = {
  users: [],
};

export const users = createAsyncThunk("users/users", async (thunkAPI) => {
  try {
    return await usersServices.users();
  } catch (error) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(users.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = usersSlice.actions;

export default usersSlice.reducer;
