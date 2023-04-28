import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Router from "./Router";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadApplication = async () => {
	await Font.loadAsync({
		Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
	});
};

export default function App() {
	const [isReady, setIsReady] = useState(false);

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
		<Provider store={store}>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</Provider>
	);
}
