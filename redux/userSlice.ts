import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  token: string;
};

const initialState: UserState = {
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeToken(state, action: PayloadAction<string>) {
      return { ...state, token: action.payload };
    },
    logout() {
      return initialState;
    },
  },
});

export const { changeToken, logout } = userSlice.actions;