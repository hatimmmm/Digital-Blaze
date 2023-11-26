import "./main.css";
import { React, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowDownShort } from "react-icons/bs";
import { gsap, Power4 } from "gsap";
import { RoughEase } from "gsap/all";
import { repeat, reverse } from "lodash";

const Main = () => {
    let tl = gsap.timeline();
    let header = useRef(null);
    let image = useRef(null);
    let arrow = useRef(null);

    // animations

    useEffect(() => {
        tl.to(header, { opacity: 1, y: 0, duration: 0.3, ease: Power4 })
            .to(
                "p",
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: Power4,
                },
                1
            )
            .to(".nav-btn", {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: Power4,
            })
            .to(
                image,
                { opacity: 1, scale: 1, duration: 1, ease: "circ.inOut" },
                1
            );
        gsap.to(arrow, {
            y: 10,
            ease: "sine.inOut",
            duration: 1,
            repeat: -1,
            yoyo: true,
        });
    }, []);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            ease: "back.out(2)",
            duration: 0.2,
            scale: 1.1,
        });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1,
            duration: 0.2,
        });
    };

    return (
        <div className="main">
            <div className="hero">
                <h1 ref={(el) => (header = el)}>Light up your life!</h1>
                <p className="paragraph">
                    Digital Blaze offers the latest and greatest in
                    electronics—from laptops to phones to gaming consoles and
                    more. Let us help you spark up your life with the coolest
                    tech tools around!
                </p>
                <NavLink to="/products" className="nav-btn">
                    <button
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        type="button"
                    >
                        Browse products
                    </button>
                </NavLink>
            </div>

            <div className="side">
                <img
                    ref={(el) => (image = el)}
                    src="/public/white.png"
                    alt=""
                />
            </div>
            <div id="idk" className="arrow-link" ref={(el) => (arrow = el)}>
                <AnchorLink href="#features">
                    <BsArrowDownShort className="arrow" />
                </AnchorLink>
            </div>
        </div>
    );
};

export default Main;
