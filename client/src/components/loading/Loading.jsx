import React from "react";
import "./loading.css";
import { MutatingDots, Oval } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="loading-con">
            <MutatingDots
                height="100"
                width="100"
                color="#f5f5f5"
                secondaryColor="#f5f5f5"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;
