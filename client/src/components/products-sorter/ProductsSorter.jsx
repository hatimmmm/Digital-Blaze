import React, { useRef } from "react";
import "./productSorter.css";
import { useProductContext } from "../../context/productsContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ProductsSorter = () => {
    const { setSortType } = useProductContext();
    const sorters = [
        {
            value: "name-asc",
            label: "name",
            icon: <FaArrowUp />,
        },
        {
            value: "name-desc",
            label: "name",
            icon: <FaArrowDown />,
        },
        {
            value: "price-asc",
            label: "price",
            icon: <FaArrowUp />,
        },
        {
            value: "price-desc",
            label: "price",
            icon: <FaArrowDown />,
        },
    ];
    return (
        <div className="product-sorter">
            <div>
                {sorters.map((sorter, i) => (
                    <label key={i}>
                        <input
                            value={sorter.value}
                            type="radio"
                            name="radio"
                            onChange={(e) => {
                                setSortType(sorter.value);
                            }}
                        />
                        <span>
                            {sorter.label}
                            {sorter.icon}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ProductsSorter;
