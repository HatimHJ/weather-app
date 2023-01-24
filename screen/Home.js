import * as React from "react";
import { useEffect } from "react";
import {
	ScrollView,
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useGlobalContext } from "../context";

export default function Home() {
	const {
		fetchLocation,
		fetchData,
		weathers,
		location,
		isNight,
		setSearch,
		search,
	} = useGlobalContext();
	const [reload, setReload] = React.useState(false);

	useEffect(() => {
		fetchLocation();
		fetchData();
		setReload(false);
	}, [reload]);

	const handleSearch = () => {
		setReload(true);
	};

	return (
		<>
			<View style={{ margin: 20, flexDirection: "row", alignItems: "center" }}>
				<TextInput
					style={styles.input}
					onChangeText={(value) => setSearch(value)}
					value={search}
					placeholder="e.g. london"
				/>
				<Button title="search" onPress={handleSearch} />
			</View>
			{weathers && (
				<ScrollView
					style={{
						...styles.container,
					}}
				>
					<Text>country : {weathers.name}</Text>
					<Icon
						name={`${weathers.dt > weathers.sys.sunset ? "moon" : "sun"}`}
						size={30}
					/>
					<Text>current time : {Number(weathers.dt)}</Text>
					<Text>sunrise time : {Number(weathers.sys.sunrise)}</Text>
					<Text>sunset time : {Number(weathers.sys.sunset)}</Text>
					<Text>temp : {Number(weathers.main.temp - 273.15).toFixed(0)}°</Text>
					<Text style={{}}>
						max : {Number(weathers.main.temp_max - 273.15).toFixed(0)}°
					</Text>
					<Text style={{}}>
						min : {Number(weathers.main.temp_min - 273.15).toFixed(0)}°
					</Text>
					<Text style={{}}>
						feels like : {Number(weathers.main.feels_like - 273.15).toFixed(0)}°
					</Text>
					<Text style={{}}>weather :{weathers.weather[0].main}</Text>
				</ScrollView>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0dd",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		flex: 1,
	},
});
