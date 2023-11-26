import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";
import "./products.css";
import axiosClient from "../../setup/api/axios-client";
import { setBrands, setProducts } from "../../store/features/cart/cartSlice";
import Loading from "../../components/loading/Loading";
import ProductModal from "../../components/product-modal/ProductModal";
import { ProductContextProvider } from "../../context/productsContext";
import SearchBar from "../../components/search-bar/SearchBar";
import ProductsHeader from "../../components/products-header/ProductsHeader";

const Products = () => {
    let [loading, setLoading] = useState(true);
    const { products } = useSelector((state) => state.cart);
    const { brands } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // fetchin data

    useEffect(() => {
        axiosClient
            .get("/brands")
            .then(({ data }) => {
                dispatch(setBrands(data.data));
            })
            .catch((err) => console.log(err));
        axiosClient
            .get("/products")
            .then(({ data }) => {
                dispatch(setProducts(data.data));
            })
            .catch((err) => console.log(err));
    }, []);

    // loading state

    useEffect(() => {
        if (brands && products) {
            setLoading(false);
        }
    }, [products, brands]);

    return (
        <ProductContextProvider>
            <div className="products-container">
                <ProductsHeader />
                {loading ? (
                    <Loading />
                ) : (
                    brands.map((brand) => (
                        <Carousel brand={brand} key={brand.id} />
                    ))
                )}
                <ProductModal />
            </div>
        </ProductContextProvider>
    );
};

export default Products;
