import React from "react";
import "./separator.css";

const Separator = ({ content }) => {
    return (
        <div className="separator">
            <span className="line"></span>
            <span className="separator-content">{content}</span>
            <span className="line"></span>
        </div>
    );
};

export default Separator;
