import React from "react";
import "./banner.scss";

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

/* Img */
import banner1 from "../../../../assets/Banner (1).png"
import banner2 from "../../../../assets/Banner (2).png"
import banner3 from "../../../../assets/Banner (3).png"

const Banner = () => {
    return(
        <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        autoplay={{
            delay: 2500,
        }}
        effect={"fade"}
        speed={800}
        loop
        slidesPerView={1}
        >
            <SwiperSlide><img className="bannerHome" src={banner1} alt="banner"/></SwiperSlide>
            <SwiperSlide><img className="bannerHome" src={banner2} alt="banner"/></SwiperSlide>
            <SwiperSlide><img className="bannerHome" src={banner3} alt="banner"/></SwiperSlide>

        </Swiper>
    );
}

export default Banner;