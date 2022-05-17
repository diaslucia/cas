import React from "react";

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

/* Img */
import FedPat from "../../../../../../assets/Aseguradoras inicio/FedPat.svg"
import Holando from "../../../../../../assets/Aseguradoras inicio/Holando.svg"
import Origenes from "../../../../../../assets/Aseguradoras inicio/Origenes.svg"
import SanCristobal from "../../../../../../assets/Aseguradoras inicio/SanCristobal.svg"
import SMG from "../../../../../../assets/Aseguradoras inicio/SMG.svg"

/* Components */
import ImgSwiper from "../imgSwiper/imgSwiper";

const SwiperAseguradoras = () => {
    return(
        <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={20}
            speed={900}
            loop
            >
                <SwiperSlide><ImgSwiper img1={FedPat} img2={FedPat} img3={Origenes}/></SwiperSlide>
                <SwiperSlide><ImgSwiper img1={SanCristobal} img2={SMG}/></SwiperSlide>

            </Swiper>
    );
}

export default SwiperAseguradoras;
