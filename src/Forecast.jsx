import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";
import "./Forecast.css";
import {parseForecastData} from "./utils/utils"
import PropTypes from "prop-types";

const Forecast = (props) => {

    if (!props.data) {
        return <p>Loading weather data...</p>;
    }

    const preparedData = parseForecastData(props.data)
    const entries = preparedData.entries
    const sunrise = preparedData.sunrise
    const sunset = preparedData.sunset

    return (
        <>
            <h2>📍 Location: {props.city ? props.city : "Udefined"}</h2>
            <div className="forecast-container">
                {entries && entries.map((obj, index) => {
                    return (
                        <Day key={index} date={obj.isoDate} icon={obj.icon} weather={obj.weather} temperature={obj.temperature} sunrise={sunrise} sunset={sunset}/>
                    )
                })}
            </div>
        </>
    );
};

export default Forecast;

Forecast.propTypes = {
    data: PropTypes.object.isRequired
}
