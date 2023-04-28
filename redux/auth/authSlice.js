import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: false,
	reducers: {
		changeAuth(state, action) {
			return (state = action);
		},
	},
});

export const { changeAuth } = authSlice.actions;
