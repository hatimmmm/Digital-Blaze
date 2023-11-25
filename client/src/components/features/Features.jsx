import React, { useEffect, useRef, useState } from "react";
import "./features.css";
import features from "./featuresList";
// import {} from "framer-motion";
import { gsap } from "gsap";
import { delay } from "lodash";
import { ScrollTrigger, Power4 } from "gsap/all";

const Card = ({ title, icon, description }) => {
    let tl = gsap.timeline();
    let card = useRef(null);

    const HandleMouseEnter = () => {
        tl.to(card, {
            duration: 0.7,
            ease: "expo.out",
            height: "auto",
            visibility: "visible",
        });
    };
    const HandleMouseLeave = () => {
        tl.to(card, {
            duration: 0.7,
            ease: "power3.out",
            height: "0px",
            visibility: "hidden",
        });
    };

    return (
        <div
            className="feature-card"
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave}
        >
            <div className="feature-icon-con">
                <span layout="position">{icon}</span>
            </div>
            <div className="feature-title">
                <h3 layout="position">{title}</h3>
            </div>

            <div className="feature-desc" ref={(el) => (card = el)}>
                <p layout="position">{description}</p>
            </div>
        </div>
    );
};

const Features = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to(".feature-card", {
            y: 0,
            opacity: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: ".feature-card-container",
            },
        });
    }, []);

    return (
        <div className="features" id="features">
            <div className="features-title">
                <h1>Features</h1>
            </div>
            <div className="feature-card-container">
                {features.map((feature) => {
                    return (
                        <Card
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
