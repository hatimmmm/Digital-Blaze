import React, { useEffect, useState } from "react";
import "./productsBody.css";
import Product from "../product/Product";
import { useProductContext } from "../../context/productsContext";

const ProductsBody = ({ products }) => {
    const { searchText, sortType } = useProductContext();
    let [filteredProducts, setFilteredProducts] = useState(products);
    // searching algo
    useEffect(() => {
        if (searchText === "") {
            setFilteredProducts(products);
        } else if (searchText !== "" && products) {
            setFilteredProducts(
                products.filter((product) =>
                    product.name
                        .toUpperCase()
                        .includes(searchText.toUpperCase())
                )
            );
        }
    }, [searchText]);

    useEffect(() => {
        switch (sortType) {
            case "name-asc":
                let nameAsc = [...filteredProducts].sort((a, b) => {
                    let a_uppercase = a.name.toUpperCase();
                    let b_uppercase = b.name.toUpperCase();
                    if (a_uppercase > b_uppercase) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                console.log(nameAsc);
                setFilteredProducts(nameAsc);
                break;
            case "name-desc":
                let nameDesc = [...filteredProducts].sort((a, b) => {
                    let a_uppercase = a.name.toUpperCase();
                    let b_uppercase = b.name.toUpperCase();
                    if (a_uppercase < b_uppercase) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                console.log(nameDesc);
                setFilteredProducts(nameDesc);
                break;

            case "price-asc":
                let priceAsc = [...filteredProducts].sort(
                    (a, b) => a.price - b.price
                );
                setFilteredProducts(priceAsc);
                break;

            case "price-desc":
                let priceDesc = [...filteredProducts].sort(
                    (a, b) => b.price - a.price
                );
                setFilteredProducts(priceDesc);
                break;

            default:
                setFilteredProducts(products);
                break;
        }
    }, [sortType]);

    return (
        <div className="products-body">
            {filteredProducts.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsBody;
