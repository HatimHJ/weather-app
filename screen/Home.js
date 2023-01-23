import * as React from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useGlobalContext } from "../context";

export default function Home() {
	const { fetchdata, whethers, isNight } = useGlobalContext();

	useEffect(() => {
		fetchdata();
	}, []);

	return (
		<>
			{whethers && (
				<View
					style={{
						...styles.container,
						backgroundColor: `${isNight ? "#66f" : "#aa0"}`,
					}}
				>
					<Icon
						name={`${isNight ? "moon" : "sun"}`}
						size={30}
						color={`${isNight ? "#fff" : "#fff"}`}
					/>
					<Text
						style={{
							color: `${isNight ? "#fff" : "#000"}`,
						}}
					>
						{whethers.elevation}
					</Text>
					<Text
						style={{
							color: `${isNight ? "#fff" : "#000"}`,
						}}
					>
						{whethers.latitude}
					</Text>
					<Text
						style={{
							color: `${isNight ? "#fff" : "#000"}`,
						}}
					>
						{whethers.longitude}
					</Text>
					{String(whethers.current_weather.time)
						.split("T")
						.map((time, key) => (
							<Text
								key={key}
								style={{
									color: `${isNight ? "#fff" : "#000"}`,
								}}
							>
								{time}
							</Text>
						))}
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0dd",
		alignItems: "center",
		justifyContent: "center",
	},
});
