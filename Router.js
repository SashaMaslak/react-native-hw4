import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getStatusAuth } from "./redux/auth/authOperations";
import { changeAuth } from "./redux/auth/authSlice";

import RegistrationSrceen from "./Screens/auth/RegistrationSrceen";
import LoginSrceen from "./Screens/auth/LoginScreen";
import Home from "./Screens/main/Home";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";
import PostsScreen from "./Screens/main/PostsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const Router = () => {
	const isAuth = useSelector(getStatusAuth);
	const dispatch = useDispatch();
	console.log(isAuth);
	const handleLogout = () => {
		dispatch(changeAuth(false));
	};

	if (!isAuth) {
		return (
			<AuthStack.Navigator>
				<AuthStack.Screen
					name="Home"
					component={isAuth ? RegistrationSrceen : LoginSrceen}
					options={
						({ headerShown: false }, { title: "Start screen" })
					}
				/>
				<AuthStack.Screen
					name="Login"
					component={LoginSrceen}
					options={{ headerShown: false }}
				/>
				<AuthStack.Screen
					name="Register"
					component={RegistrationSrceen}
					options={{ headerShown: false }}
				/>
			</AuthStack.Navigator>
		);
	}
	return (
		<MainTab.Navigator
			screenOptions={() => ({
				tabBarShowLabel: false,
			})}
		>
			<MainTab.Screen
				name="Posts"
				component={PostsScreen}
				options={{
					headerTitleAlign: "center",
					tabBarIcon: ({ focused, size, color }) => {
						if (focused) {
							color = "#FFF";
						}
						return (
							<AntDesign
								name="appstore-o"
								size={24}
								color={color}
								style={
									focused ? styles.tabBarIconWrapper : null
								}
							/>
						);
					},
					headerRight: () => (
						<TouchableOpacity
							style={{ marginRight: 10 }}
							activeOpacity={0.7}
							onPress={() => handleLogout()}
						>
							<MaterialIcons
								name="logout"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					),
				}}
			></MainTab.Screen>
			<MainTab.Screen
				name="CreatePosts"
				component={CreatePostsScreen}
				options={{
					headerTitleAlign: "center",
					tabBarIcon: ({ focused, size, color }) => {
						if (focused) {
							color = "#FFF";
						}
						return (
							<AntDesign
								name="plus"
								size={24}
								color={color}
								style={
									focused ? styles.tabBarIconWrapper : null
								}
							/>
						);
					},
					headerRight: () => (
						<TouchableOpacity
							style={{ marginRight: 10 }}
							activeOpacity={0.7}
							onPress={() => handleLogout()}
						>
							<MaterialIcons
								name="logout"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					),
					headerLeft: () => (
						<TouchableOpacity
							style={{ marginLeft: 10 }}
							activeOpacity={0.7}
							onPress={() => alert("This is a logout!")}
						>
							<Ionicons
								name="arrow-back"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					),
				}}
			></MainTab.Screen>
			<MainTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerTitleAlign: "center",
					tabBarIcon: ({ focused, size, color }) => {
						if (focused) {
							color = "#FFF";
						}
						return (
							<Feather
								name="user"
								size={24}
								color={color}
								style={
									focused ? styles.tabBarIconWrapper : null
								}
							/>
						);
					},
					headerRight: () => (
						<TouchableOpacity
							style={{ marginRight: 10 }}
							activeOpacity={0.7}
							onPress={() => handleLogout()}
						>
							<MaterialIcons
								name="logout"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					),
					headerLeft: () => (
						<TouchableOpacity
							style={{ marginLeft: 10 }}
							activeOpacity={0.7}
							onPress={() => alert("This is a logout!")}
						>
							<Ionicons
								name="arrow-back"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					),
				}}
			></MainTab.Screen>
		</MainTab.Navigator>
	);
};

export default Router;

const styles = StyleSheet.create({
	tabBarIconWrapper: {
		backgroundColor: "#FF6C00",
		width: 70,
		height: 40,
		verticalAlign: "middle",
		textAlign: "center",
		borderRadius: 20,
	},
});
