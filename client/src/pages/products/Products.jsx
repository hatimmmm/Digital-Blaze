import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./products.css";
import axiosClient from "../../setup/api/axios-client";
import { setBrands, setProducts } from "../../store/features/cart/cartSlice";
import Loading from "../../components/loading/Loading";
import ProductModal from "../../components/product-modal/ProductModal";
import {
    ProductContextProvider,
    useProductContext,
} from "../../context/productsContext";
import ProductsHeader from "../../components/products-header/ProductsHeader";
import ProductsBody from "../../components/products-body/ProductsBody";
import Separator from "../../components/seperator/Separator";
import Brands from "../../components/brands/Brands";

const Products = () => {
    let [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { setFilteredProducts } = useProductContext();

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
                setFilteredProducts(data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const { products, brands } = useSelector((state) => state.cart);

    // loading state

    useEffect(() => {
        if (products && brands) {
            setLoading(false);
        }
    }, [products, brands]);

    return (
        <ProductContextProvider>
            <div className="products-container">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <ProductsHeader />
                        <Separator content="Top brands" />
                        <Brands />
                        <Separator content="Latest products" />
                        <ProductsBody />
                        <ProductModal />
                    </>
                )}
            </div>
        </ProductContextProvider>
    );
};

export default Products;
