import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import * as React from "react";
import { StatusBar } from "react-native";
import { AppProvider } from "./context";

import Home from "./screen/Home";
import About from "./screen/About";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<AppProvider>
			<StatusBar animated={true} backgroundColor="#61d2f2" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Drawers"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="About" component={About} />
					<Stack.Screen name="Drawers" component={Drawers} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppProvider>
	);
}

const Drawer = createDrawerNavigator();

function Drawers() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="About" component={About} />
			<Drawer.Screen name="Home" component={Home} />
		</Drawer.Navigator>
	);
}
