import { React } from "react";
import RemBtn from "./rem-btn/RemBtn";
import AddBtn from "./add-btn/AddBtn";
import "./product.css";
import { useProductContext } from "../../context/productsContext";
const Product = ({ product, items, onAdd }) => {
    const { setOpenModal, setProductId } = useProductContext();

    const fullname = product.name;
    let maxChar = 15;
    let reducedName = fullname.slice(0, maxChar);
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
