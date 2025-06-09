import React from "react";
import ReactDOM from 'react-dom';
import Day from "./Day";
import "./Forecast.css"


const Forecast = () => {
    return (
        <div className="forecast-container">
            <Day date="Thu, Mar 14"  weather="Cloudy" temperature={60.0}/>
            <Day date="Fri, Mar 15"  weather="Sunny" temperature={70.4}/>
            <Day date="Sat, Mar 16"  weather="Rain" temperature={19.0}/>
            <Day date="Sun, Mar 17"  weather="Thunder" temperature={32.0}/>
            <Day date="Mon, Mar 18"  weather="Haze" temperature={25.0}/>
        </div>
    )
}

export default Forecast;