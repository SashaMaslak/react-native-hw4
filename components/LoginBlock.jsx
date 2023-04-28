import { Text, View, StyleSheet, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { changeAuth } from "../redux/auth/authSlice";
import Btn from "./Btn";

const LoginBlock = ({ nav, titleBtn, text, clearInputs, credentials }) => {
	const dispatch = useDispatch();
	const handlePressBtn = () => {
		const values = Object.values(credentials);
		if (values.includes("")) {
			return alert("To fill every field!");
		}

		clearInputs();
		Keyboard.dismiss();

		console.log(credentials);
		dispatch(changeAuth(true));
		nav("Home");
	};

	const handlePressText = () => {
		titleBtn === "Sign in" ? nav("Register") : nav("Login");
	};

	return (
		<View>
			<Btn title={titleBtn} handlePressBtn={handlePressBtn} />
			<Text style={styles.link} onPress={handlePressText}>
				{text}
			</Text>
		</View>
	);
};

export default LoginBlock;

const styles = StyleSheet.create({
	link: {
		color: "#1B4371",
		textAlign: "center",
	},
});
