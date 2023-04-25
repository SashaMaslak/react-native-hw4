import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Btn = ({ title, handlePressBtn }) => {
	return (
		<TouchableOpacity
			onPress={handlePressBtn}
			activeOpacity={0.7}
			style={styles.btn}
		>
			<Text style={styles.titleBtn}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Btn;

const styles = StyleSheet.create({
	btn: {
		marginTop: 16,
		marginBottom: 16,
		marginHorizontal: 16,
		backgroundColor: "#FF6C00",
		height: 50,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
	titleBtn: {
		fontSize: 18,
		lineHeight: 19,
		color: "#FFF",
	},
});
