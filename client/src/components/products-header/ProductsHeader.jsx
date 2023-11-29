import React from "react";
import "./productsHeader.css";
import SearchBar from "../search-bar/SearchBar";
import ProductsSorter from "../products-sorter/ProductsSorter";

const ProductsHeader = () => {
    return (
        <div className="product-header">
            <SearchBar />
            <ProductsSorter />
        </div>
    );
};

export default ProductsHeader;
