import { Text, View, StyleSheet, Keyboard } from "react-native";
import Btn from "../components/Btn";

const LoginBlock = ({ title, text, clearInputs, credentials }) => {
	const handlePressBtn = () => {
		const values = Object.values(credentials);
		console.log(values);
		if (values.includes("")) {
			return alert("To fill every field!");
		}
		console.log("click");
		clearInputs();
		Keyboard.dismiss();
	};
	return (
		<View>
			<Btn title={title} handlePressBtn={handlePressBtn} />
			<Text style={styles.link}>{text}</Text>
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
