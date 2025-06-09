import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <h1>Weather Report</h1>
                <SearchForm/>
                <Forecast/>
            </header>
        </>
    );
}

export default App;
