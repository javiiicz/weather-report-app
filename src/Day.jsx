import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./Day.css"

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
            <p className="emoji">{props.emoji}</p>
            <p>{props.weather}</p>
            <p className={tempClass}>{props.temperature}°F</p>
        </div>
    )
}

Day.propTypes = {
    date: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
}

export default Day;