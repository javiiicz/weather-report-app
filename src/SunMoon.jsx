import React from "react";

const SunMoon = (props) => {
    return (
        <div>
            <p>🌅 Sunrise: {props.sunrise}</p>
            <p>🌇 Sunset: {props.sunset}</p>
        </div>
    );
};

export default SunMoon;
