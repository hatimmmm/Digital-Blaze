import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
import { useProductContext } from "../../context/productsContext";

const SearchBar = () => {
    const { setSearchText, searchText } = useProductContext();
    const handleInput = (e) => {
        setSearchText(e.target.value);
    };
    return (
        <div className="search-bar-container">
            <div className="search-bar-wrap">
                <div className="search-bar-input">
                    <input type="text" onChange={handleInput} />
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
