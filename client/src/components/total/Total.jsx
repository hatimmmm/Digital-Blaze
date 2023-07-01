import React from "react";
import { useSelector } from "react-redux";
import "./total.css";
const Total = () => {
  const { items } = useSelector((state) => state.cart);

  const subtotal = items.reduce((a, item) => a + item.total, 0);

  let total = subtotal + subtotal * (20 / 100);

  return (
    <div className="total">
      <table>
        <tbody>
          <tr>
            <td>SUBTOTAL</td>
            <td>${subtotal}</td>
          </tr>
          <tr>
            <td>TOTAL</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Total;
