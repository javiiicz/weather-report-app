import { useEffect, useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import data from "./data/data";
import { parseCoords } from "./utils/utils";

function App() {
    const [count, setCount] = useState(0);
    const apiKey = import.meta.env.VITE_APP_API_KEY;

    const [city, setCity] = useState("Miami");
    const [weatherData, setWeatherData] = useState("");
    const [coords, setCoords] = useState(null);

    const onCityChange = (city) => {
        setCity(city);
    };

    const fetchCity = async () => {
        try {
            console.log("fetching city...")
            const apiKey = import.meta.env.VITE_APP_API_KEY;
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }
            let coords = await response.json();
            coords = await parseCoords(coords)
            setCoords(coords);
            console.log(coords)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchData = async () => {
        try {
            if (coords === null) {
                console.log('returned')
                return
            }
            
            console.log('2 fetching city...')
            const apiKey = import.meta.env.VITE_APP_API_KEY;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (city) {
            fetchCity();
        }
    }, [city]);

    useEffect(() => {
        if (coords) {
            fetchData()
        }
    }, [coords])

    return (
        <>
            <header>
                <h1>Weather Report</h1>
                <SearchForm onCityChange={onCityChange} />
                <Forecast data={weatherData} city={city} />
            </header>
        </>
    );
}

export default App;
