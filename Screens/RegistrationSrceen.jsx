import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import Input from "../components/Input";
import LoginBlock from "../components/LoginBlock";

const initialStateReg = {
	avatar: "./",
	login: "",
	email: "",
	password: "",
};

const RegistrationSrceen = ({ isVisibleKeyboard }) => {
	const [credentials, setCredentials] = useState(initialStateReg);
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
		setCredentials(initialStateReg);
	};

	return (
		<View style={styles.form}>
			<View style={styles.avatar}>
				<View style={styles.pinAddAvatar}>
					<Image source={require("../assets/union.png")} />
				</View>
			</View>

			<Text style={[styles.titleForm, styles.shadowProp]}>
				Registration
			</Text>
			<View style={styles.inputsBlock}>
				<Input
					onChange={onChange}
					placeholder="Login"
					name="login"
					value={credentials.login}
					setCredentials={setCredentials}
				/>
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
					title="Sign up"
					text="If you have an account? Log In"
					clearInputs={clearInputs}
					credentials={credentials}
				/>
			)}
		</View>
	);
};

export default RegistrationSrceen;

const styles = StyleSheet.create({
	form: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingBottom: 50, // isVisibleKeyboard ? 8 : 48,
		position: "relative",
		// marginBottom: 100,
	},
	avatar: {
		height: 120,
		width: 120,
		borderRadius: 16,
		backgroundColor: "#F6F6F6",
		position: "absolute",
		textAlign: "center",
		left: "50%",
		transform: [{ translateY: -60 }, { translateX: -60 }],
	},
	pinAddAvatar: {
		justifyContent: "center",
		alignItems: "center",
		height: 25,
		width: 25,
		borderRadius: 25 / 2,
		borderColor: "#FF6C00",
		borderWidth: 1,
		position: "absolute",
		textAlign: "center",
		right: 0,
		bottom: 14,
		transform: [{ translateX: 12 }],
	},
	titleForm: {
		marginTop: 90,
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
