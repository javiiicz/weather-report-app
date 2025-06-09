import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./Day.css"

const Day = (props) => {
    return (
        <div className="day-container">
            <h2>{props.date}</h2>
            <p>{props.weather}</p>
            <p>{props.temperature}°C</p>
        </div>
    )
}

Day.propTypes = {
    date: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}

export default Day;