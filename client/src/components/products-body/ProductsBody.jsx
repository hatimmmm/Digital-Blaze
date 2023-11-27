import React from "react";
import "./productsBody.css";
import Product from "../product/Product";

const ProductsBody = ({ products }) => {
    return (
        <div className="products-body">
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsBody;
