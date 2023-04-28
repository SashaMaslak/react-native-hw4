import { createSlice } from "@reduxjs/toolkit";

const initialStateReg = {
	avatar: "./",
	login: "",
	email: "",
	password: "",
	posts: [],
	isLoggedIn: false,
};

export const usersSlice = createSlice({
	name: "users",
	initialState: initialStateReg,
	reducers: {
		addUser(state, action) {
			return [...state, action.payload];
		},
	},
});

export const { addUser } = authSlice.actions;
