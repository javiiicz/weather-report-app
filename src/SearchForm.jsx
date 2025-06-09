import React from "react";
import ReactDOM from "react-dom";

const SearchForm = () => {
    const submitSearch = (event) => {
        event.preventDefault();
        console.log("submitted");
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
            onSubmit={submitSearch}
            onKeyDown={handleKeyPress}
        >
            <input type="text" className="input-field"></input>
            <button type="submit" className="submit-button">Search</button>
        </form>
    );
};

export default SearchForm;
