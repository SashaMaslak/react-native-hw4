import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useKeyboardVisible } from "./hooks/useKeyboardVisible";
import {
	StyleSheet,
	View,
	ImageBackground,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Platform,
	Keyboard,
} from "react-native";
import RegistrationSrceen from "./Screens/RegistrationSrceen";
// import LoginSrceen from "./Screens/LoginScreen";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadApplication = async () => {
	await Font.loadAsync({
		Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
	});
};

export default function App() {
	const [isReady, setIsReady] = useState(false);
	let isVisibleKeyboard = useKeyboardVisible();

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onFinish={() => setIsReady(true)}
				onError={console.warn}
			/>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<ImageBackground
					style={styles.bg}
					source={require("./assets/Photo_BG.png")}
				>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : ""}
					>
						<RegistrationSrceen
							isVisibleKeyboard={isVisibleKeyboard}
						/>
						{/* <LoginSrceen isVisibleKeyboard={isVisibleKeyboard} /> */}
						<StatusBar style="auto" />
					</KeyboardAvoidingView>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	bg: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
		// alignItems: "center",
	},
});
