import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import Input from "../components/Input";
import LoginBlock from "../components/LoginBlock";

const initialStateLogin = {
	email: "",
	password: "",
};

const LoginSrceen = ({ isVisibleKeyboard }) => {
	const [credentials, setCredentials] = useState(initialStateLogin);
	const [isShowPassword, setIsShowPassword] = useState(true);
	console.log(credentials);
	const handleShowPassword = () => {
		setIsShowPassword(!isShowPassword);
	};

	const iconShowEffect = isShowPassword
		? require("../assets/show.png")
		: require("../assets/hide.png");

	const onChange = ({ name, value }) => {
		setCredentials((prevState) => ({ ...prevState, [name]: value }));
	};

	const clearInputs = () => {
		setCredentials(initialStateLogin);
	};

	return (
		<View style={styles.form}>
			<Text style={[styles.titleForm, styles.shadowProp]}>Login</Text>
			<View style={styles.inputsBlock}>
				<Input
					onChange={onChange}
					placeholder="E-Mail"
					name="email"
					value={credentials.email}
				/>
				<Input
					onChange={onChange}
					placeholder="Password"
					name="password"
					value={credentials.password}
					isShowPassword={isShowPassword}
				/>
				<TouchableOpacity
					style={styles.iconShowEffect}
					onPress={handleShowPassword}
					activeOpacity={0.7}
				>
					<Image source={iconShowEffect} />
				</TouchableOpacity>
			</View>
			{isVisibleKeyboard ? null : (
				<LoginBlock
					title="Sign in"
					text="If you don`t have an account? Sign Up"
					clearInputs={clearInputs}
					credentials={credentials}
				/>
			)}
		</View>
	);
};

export default LoginSrceen;

const styles = StyleSheet.create({
	form: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingBottom: 50,
		position: "relative",
		// marginBottom: 100,
	},
	titleForm: {
		marginTop: 50,
		color: "#212121",
		fontWeight: 500,
		fontSize: 30,
		lineHeight: 35,
		textAlign: "center",
		marginBottom: 32, //isVisibleKeyboard ? 16 : 32,
	},
	inputsBlock: {
		position: "relative",
	},
	iconShowEffect: {
		padding: 4,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: 24,
		bottom: 24,
	},
});
