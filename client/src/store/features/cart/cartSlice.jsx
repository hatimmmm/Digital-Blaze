import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useState } from "react";
import data from "../../data/items";
import products from "../../data/techProducts";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        products: [],
        brands: null,
    },
    reducers: {
        setItems: (state, action) => {
            const { id, price } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                const total = price;
                const newItem = {
                    ...action.payload,
                    amount: 1,
                    total: total,
                };
                state.items = [...state.items, newItem];
            }
        },
        amountInc: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            item.amount += 1;
            item.total = item.amount * item.price;
        },
        amountDec: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (item.amount > 1) {
                item.amount -= 1;
            } else {
                item.amount = 1;
            }
            item.total = item.amount * item.price;
        },
        remItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        setBrands: (state, action) => {
            state.brands = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export default cartSlice.reducer;
export const {
    setItems,
    remItem,
    amountInc,
    amountDec,
    setTotal,
    setBrands,
    setProducts,
} = cartSlice.actions;
