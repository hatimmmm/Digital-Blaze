import React, { useEffect, useState } from "react";
import "./productsBody.css";
import Product from "../product/Product";
import { useProductContext } from "../../context/productsContext";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { useForceUpdate } from "framer-motion";

const ProductsBody = () => {
    const { searchText, sortType, setFilteredProducts, filteredProducts } =
        useProductContext();
    const { products } = useSelector((state) => state.cart);
    const [loading, setLoading] = useState(true);
    const update = useForceUpdate;
    // searching algo
    // useEffect(() => {
    //     if (searchText === "") {
    //         setFilteredProducts(products);
    //     } else if (searchText !== "" && products) {
    //         setFilteredProducts(
    //             products.filter((product) =>
    //                 product.name
    //                     .toUpperCase()
    //                     .includes(searchText.toUpperCase())
    //             )
    //         );
    //     }
    // }, [searchText]);

    while (!filteredProducts) {
        update();
        if (filteredProducts) {
            break;
        }
    }

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

    useEffect(() => {
        while (filteredProducts == []) {
            update;
        }
    }, []);

    useEffect(() => {
        if (!setFilteredProducts == []) {
            setLoading(false);
        }
    }, [loading]);
    return (
        <div className="products-body">
            {!loading ? (
                filteredProducts
                    .filter((product) => {
                        return searchText === ""
                            ? product
                            : product.name
                                  .toUpperCase()
                                  .includes(searchText.toUpperCase());
                    })
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))
            ) : (
                <Loading />
            )}
            ;
        </div>
    );
};

export default ProductsBody;
