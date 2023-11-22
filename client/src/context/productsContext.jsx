import { createContext, useContext, useState } from "react";

const productsContext = createContext({
    setProductId: () => {},
    setOpenModal: () => {},
});

export const useProductContext = () => useContext(productsContext);

export const ProductContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [productId, setProductId] = useState("");

    return (
        <productsContext.Provider
            value={{ openModal, productId, setOpenModal, setProductId }}
        >
            {children}
        </productsContext.Provider>
    );
};
