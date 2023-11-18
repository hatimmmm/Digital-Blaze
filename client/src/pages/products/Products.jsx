import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";
import "./products.css";
import axiosClient from "../../setup/api/axios-client";
import { useEffect } from "react";
import { useState } from "react";
import { setBrands, setProducts } from "../../store/features/cart/cartSlice";
import Loading from "../../components/loading/Loading";

const Products = () => {
  let [loading, setLoading] = useState(true);
  const { products } = useSelector((state) => state.cart);
  const { brands } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (brands && products) {
      setLoading(false)
    }
  }, [products, brands])



  return (
    <div className="products-container">
      {

        loading ? <Loading /> : (brands.map((brand) => {
          return (<Carousel data={products} brand={brand} key={brand.id} />)
        }))

      }
    </div>
  );
};

export default Products;
