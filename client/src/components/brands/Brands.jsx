import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import "./brands.css";
import "react-multi-carousel/lib/styles.css";
const Brands = () => {
    // const { brands } = useSelector((state) => state.cart);
    const [loading, setLoading] = useState(true);
    const { brands } = useSelector((state) => state.cart);
    useEffect(() => {
        if (brands) {
            setLoading(false);
        }
    }, [brands]);

    console.log(brands[4].name);
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
    return (
        <div className="brands-container">
            <Carousel
                muted="true"
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {!loading ? (
                    brands.map((brand) => (
                        <div className="brand-card-container" key={brand.id}>
                            <div className="brand-card-body">
                                <div className="brand-card-img">
                                    <img src={brand.logo} alt={brand.name} />
                                </div>
                            </div>
                            <div className="overlay">
                                <div className="brand-card-name">
                                    <p>{brand.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <Loading />
                )}
            </Carousel>
        </div>
    );
};

export default Brands;
