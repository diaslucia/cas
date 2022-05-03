import React from "react";
import "./banner.scss";

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

/* Img */
import banner from "../../../../assets/banner.jpg"
import banner2 from "../../../../assets/banner2.jpg"

const Banner = () => {
    return(
        <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        loop
        slidesPerView={1}
        >
            <SwiperSlide><img src={banner} alt="banner"/></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="banner"/></SwiperSlide>

        </Swiper>
    );
}

export default Banner;