import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const KEY = process.env.API_KEY;

const AppProvider = ({ children }) => {
	const [location, setLocation] = useState({
		lat: 51.5073219,
		lon: -0.1276474,
	});
	const [weathers, setWeathers] = useState(null);
	const [isNight, setIsNight] = useState(false);
	const [search, setSearch] = useState("london");
	const locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${KEY}`;
	const dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${KEY}`;

	const fetchLocation = async () => {
		const res = await fetch(locationUrl);
		const data = await res.json();
		setLocation({ lat: data[0].lat, lon: data[0].lon });
	};

	const fetchData = async () => {
		const res = await fetch(dataUrl);
		const data = await res.json();
		console.log(data);
		setWeathers(data);
	};
	return (
		<AppContext.Provider
			value={{
				weathers,
				isNight,
				fetchLocation,
				fetchData,
				setSearch,
				search,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
