import React from "react";
import "./productsHeader.css";
import SearchBar from "../search-bar/SearchBar";

const ProductsHeader = () => {
    return (
        <div className="product-header">
            <SearchBar />
        </div>
    );
};

export default ProductsHeader;
