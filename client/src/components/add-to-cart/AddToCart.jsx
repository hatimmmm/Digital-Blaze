import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setName, setQuantity } from "../../store/features/cart/addToCartSlice";
import { setItems } from "../../store/features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
import "./addToCart.css";

const ErrMsg = ({ msg }) => {
  return <div className="errMsg"></div>;
};

const AddToCart = ({ onAdd }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.cart);
  const { name } = useSelector((state) => state.addToCart);
  const { quantity } = useSelector((state) => state.addToCart);

  const onClick = (e) => {
    e.preventDefault();
    for (let x in data) {
      if (data[x].name === name) {
        let id = uuidv4();
        let newItem = { id: id, quantity: quantity, ...data[x] };
        console.log(newItem);
        dispatch(setItems(newItem));
      }
    }
    dispatch(setName(""));
    dispatch(setQuantity(0));
  };
  return (
    <form className="add-form">
      <div className="form-control">
        <label>TV's</label>
        <select
          value={name}
          name="tv"
          onChange={(e) => dispatch(setName(e.currentTarget.value))}
        >
          <option></option>
          {data.map((item) => {
            return <option key={item.name}>{item.name}</option>;
          })}
        </select>
      </div>

      <div className="form-control">
        <label>Quantity</label>
        <input
          value={quantity}
          type="number"
          onChange={(e) =>
            dispatch(setQuantity(parseInt(e.currentTarget.value)))
          }
        ></input>
      </div>

      <button type="submit" className="btn" onClick={(e) => onClick(e)}>
        <FaCartPlus className="btn-icon" />
      </button>
    </form>
  );
};

export default AddToCart;
