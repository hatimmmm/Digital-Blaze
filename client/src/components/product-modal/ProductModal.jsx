import React from "react";
import "./productModal.css";
import { useProductContext } from "../../context/productsContext";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaTimes } from "react-icons/fa";
import AddBtn from "../product/add-btn/AddBtn";
import RemBtn from "../product/rem-btn/RemBtn";
import { setItems } from "../../store/features/cart/cartSlice";

const ProductModal = ({}) => {
    const { openModal, setOpenModal, productId } = useProductContext();
    const { products, items } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const onAdd = (newItem) => {
        dispatch(setItems(newItem));
    };

    if (openModal && productId && products) {
        const modalProduct = products.filter(
            (product) => product.id === productId
        )[0];
        console.log(modalProduct);
        console.log(items);

        return (
            <div
                className="product-modal-overlay"
                onClick={() => setOpenModal(false)}
            >
                <div
                    className="product-modal-container"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="close-btn">
                        <FaTimes onClick={() => setOpenModal(false)} />
                    </div>
                    <div className="product-modal">
                        <div className="product-image">
                            <img src={modalProduct.image} alt="" />
                        </div>
                        <div className="product-info">
                            <div className="product-name">
                                <span>{modalProduct.name}</span>
                            </div>
                            <div className="product-brand">
                                <span>{modalProduct.brand.name}</span>
                            </div>

                            <div className="product-rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="product-price">
                                {Number.isInteger(modalProduct.price)
                                    ? `$${modalProduct.price}.00`
                                    : modalProduct.price}
                            </div>
                            <div className="product-description">
                                {modalProduct.description}
                            </div>
                            <div className="btn-con">
                                {items.find((i) => i.id === modalProduct.id) ? (
                                    <RemBtn
                                        onAdd={onAdd}
                                        newItem={modalProduct}
                                    />
                                ) : (
                                    <AddBtn
                                        onAdd={onAdd}
                                        newItem={modalProduct}
                                        classname={
                                            !modalProduct.available
                                                ? "disabled-btn"
                                                : "add-to-cart"
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductModal;
