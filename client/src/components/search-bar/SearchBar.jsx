import React from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar-wrap">
                <div className="search-bar-input">
                    <input type="text" />
                </div>
                <div className="search-bar-button">
                    <button type="button">
                        <FaSearch className="search-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
