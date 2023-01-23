import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as React from "react";
import { StatusBar } from "react-native";
import { AppProvider } from "./context";

import Home from "./screen/Home";
import About from "./screen/About";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<AppProvider>
			<StatusBar animated={true} backgroundColor="#61d2f2" />
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="About">
					<Drawer.Screen name="Home" component={Home} />
					<Drawer.Screen name="About" component={About} />
				</Drawer.Navigator>
			</NavigationContainer>
		</AppProvider>
	);
}
