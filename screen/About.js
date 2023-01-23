import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function About({ navigation }) {
	return (
		<>
			<Text>About</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Home")}>
				<Text>Link</Text>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({});
