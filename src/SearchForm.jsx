import React from "react";
import ReactDOM from "react-dom";
import "./SearchForm.css"

const SearchForm = ({ onCityChange }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
        onCityChange(event.target.elements.inputField.value)
        return;
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    return (
        <form
            className="search-container"
            onSubmit={handleSubmit}
            onKeyDown={handleKeyPress}
        >
            <input type="text" className="input-field" name="inputField"></input>
            <button type="submit" className="submit-button">Search</button>
        </form>
    );
};

export default SearchForm;
