import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./Day.css";
import SunMoon from "./SunMoon";

const Day = (props) => {
    let tempClass =  ""
    if (props.temperature < 60) {
        tempClass = "cold"
    } else {
        tempClass = "hot"
    }

    return (
        <div className="day-container">
            <h3>{props.date}</h3>
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt={props.weather}></img>
            <p>{props.weather}</p>
            <p className={tempClass}>{props.temperature}°F</p>
            <SunMoon sunrise={props.sunrise} sunset={props.sunset}/>
        </div>
    )
}

Day.propTypes = {
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}

export default Day;