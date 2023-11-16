import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import floodReducer from "./reducers/floodReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    flood: floodReducer,
  },
});
