import React from "react";
import "./cartItem.css";
import { BsFillBagXFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  remItem,
  setItems,
  amountInc,
  amountDec,
  setTotal,
} from "../../store/features/cart/cartSlice";
import { motion } from "framer-motion";

const Item = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return items.map((item) => {
    return (
      <motion.tr layout key={item.id} className="table-row">
        <td className="img">
          <TiDelete
            className="remove"
            onClick={() => dispatch(remItem(item.id))}
          />
          <img alt={item.id} src={item.image} />
        </td>
        <td className="name">{item.name}</td>
        <td className="price">${item.price}.00</td>
        <td className="amount">
          <FaChevronUp
            className="chevron"
            onClick={() => dispatch(amountInc(item.id))}
          />
          <span>{item.amount}</span>
          <FaChevronDown
            className="chevron"
            onClick={() => dispatch(amountDec(item.id))}
          />
        </td>
        <td id="itemTotal">${item.total}.00</td>

        {/* <td className="del-btn">
          <BsFillBagXFill
            className="delbtn"
            onClick={() => dispatch(remItem(item.id))}
          />
        </td> */}
      </motion.tr>
    );
  });
};

export default Item;
