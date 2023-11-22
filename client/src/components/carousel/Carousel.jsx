import React, { useState } from "react";
import "./carousel.css";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { setItems } from "../../store/features/cart/cartSlice";
import Product from "../product/Product";

const Slider = ({ data, brand }) => {
    const { items, products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const onAdd = (newItem) => {
        dispatch(setItems(newItem));
    };

    return (
        <div>
            <div className="separator">
                <span className="line"></span>
                <img src={brand.logo} alt={brand.logo} />
                <span className="line"></span>
            </div>
            <Carousel
                muted="true"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={false}
                // autoPlaySpeed={5000}
                keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {products.map((product) => {
                    if (product.brand.id === brand.id) {
                        return (
                            <Product
                                key={product.id}
                                product={product}
                                onAdd={onAdd}
                                items={items}
                            ></Product>
                        );
                    }
                })}
            </Carousel>
        </div>
    );
};

export default Slider;
