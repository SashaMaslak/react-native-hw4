import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getStatusAuth } from "../../redux/auth/authOperations";

const Home = ({ navigation }) => {
	const isAuth = useSelector(getStatusAuth);

	return <></>;
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
