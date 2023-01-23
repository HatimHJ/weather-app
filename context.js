import React, { useState, useContext } from "react";
const AppContext = React.createContext();

// city to [lat - lon]
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=853f43718c56b684a05497305f469a1f

// the weather
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const url =
	"https://api.open-meteo.com/v1/forecast?latitude=33.10&longitude=75.56&hourly=temperature_2m&current_weather=true&timezone=auto";

const AppProvider = ({ children }) => {
	const [whethers, setWhethers] = useState(null);
	const [isNight, setIsNight] = useState(false);
	const [search, setSearch] = useState("london");

	const fetchdata = async () => {
		const res = await fetch(url);
		const data = await res.json();
		setWhethers(data);
		if (+String(data.current_weather.time).split("T")[1].split(":")[0] > 12) {
			setIsNight(true);
		}
	};
	return (
		<AppContext.Provider value={{ whethers, isNight, fetchdata }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
