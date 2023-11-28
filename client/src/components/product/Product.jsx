import { React } from "react";
import RemBtn from "./rem-btn/RemBtn";
import AddBtn from "./add-btn/AddBtn";
import "./product.css";
import { useProductContext } from "../../context/productsContext";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/features/cart/cartSlice";

const Product = ({ product }) => {
    const { setOpenModal, setProductId } = useProductContext();
    const { items } = useSelector((state) => state.cart);
    const fullname = product.name;
    let maxChar = 15;
    let reducedName = fullname.slice(0, maxChar);
    const dispatch = useDispatch();
    const onAdd = (newItem) => {
        dispatch(setItems(newItem));
    };
    return (
        <div className="card-container">
            <div className="card-body">
                <div
                    className="card-img"
                    onClick={() => {
                        setOpenModal(true);
                        setProductId(product.id);
                    }}
                >
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="overlay">
                <div className="card-name">
                    <p>{reducedName}...</p>
                </div>
                <div className="price-size">
                    <div
                        className={
                            product.available
                                ? "in-stock"
                                : "in-stock unavailable"
                        }
                    >
                        {product.available ? "in stock" : "unavailable"}
                    </div>
                    <div className="card-price">
                        {Number.isInteger(product.price)
                            ? `$${product.price}.00`
                            : `$${product.price}`}
                    </div>
                </div>
                <div className="btn-con">
                    {items.find((i) => i.id === product.id) ? (
                        <RemBtn onAdd={onAdd} newItem={product} />
                    ) : (
                        <AddBtn
                            onAdd={onAdd}
                            newItem={product}
                            classname={
                                !product.available
                                    ? "disabled-btn"
                                    : "add-to-cart"
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
