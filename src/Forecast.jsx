import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";
import "./Forecast.css";
import {parseForecastData} from "./utils/utils"
import PropTypes from "prop-types";

const Forecast = (props) => {

    const preparedData = parseForecastData(props.data)

    return (
        <>
            <h2>Location: {props.data.city.name}</h2>
            <div className="forecast-container">
                {preparedData.map(obj => {
                    return (
                        <Day date={obj.isoDate} icon={obj.icon} weather={obj.weather} temperature={obj.temperature}/>
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
