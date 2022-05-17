import React from "react";
import "./imgSwiper.scss";

const ImgSwiper = ({ img1, img2, img3}) => {
    return(
        <div className="imgSwiper_container">
            <img src={img1} alt="logo"/>
            <img src={img2} alt="logo"/>
            {img3 && <img src={img3} alt="logo"/>}

        </div>
    );
}

export default ImgSwiper;
