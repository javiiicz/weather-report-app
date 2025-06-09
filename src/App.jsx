import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import data from "./data/data";

function App() {
    const [count, setCount] = useState(0);
    const apiKey = import.meta.env.VITE_APP_API_KEY;

    return (
        <>
            <header>
                <h1>Weather Report</h1>
                <SearchForm/>
                <Forecast data={data}/>
            </header>
        </>
    );
}

export default App;
