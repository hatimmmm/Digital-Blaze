import { createContext, useContext, useState } from "react";

const productsContext = createContext({
    setProductId: () => {},
    setOpenModal: () => {},
    setSearchText: () => {},
});

export const useProductContext = () => useContext(productsContext);

export const ProductContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [productId, setProductId] = useState("");
    const [searchText, setSearchText] = useState("");
    const [sortType, setSortType] = useState("");

    return (
        <productsContext.Provider
            value={{
                openModal,
                productId,
                setOpenModal,
                setProductId,
                searchText,
                setSearchText,
                sortType,
                setSortType,
            }}
        >
            {children}
        </productsContext.Provider>
    );
};
