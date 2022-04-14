import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

// Styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Images
import image1 from '../../images/feedback1.jpg';
import image2 from '../../images/feedback2.jpg';
import image3 from '../../images/feedback3.jpg';
import image4 from '../../images/feedback4.jpg';
import image5 from '../../images/feedback5.jpg';
import image6 from '../../images/feedback6.jpg';


const Container = styled.div`
 width: 25vw;
 height: 70vh;

 .swiper {
     width: 100%;
     height: 100%;
 }

 .swiper-slide {
     background-color: #020426;
     border-radius: 20px;

     justify-content: center;
     align-items: center;
 }

 .swiper-button-next {
     color: black;
     right: 0;
     width: 4rem;
 }

 .swiper-button-prev {
     color: black;
     left: 0;
     width: 4rem;
 }
`

const Carrosel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        scrollbar={{
            draggable:true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={image1} alt="Feedbacks" /> </SwiperSlide>
        <SwiperSlide> <img src={image2} alt="Feedbacks" /></SwiperSlide>
        <SwiperSlide> <img src={image3} alt="Feedbacks" /> </SwiperSlide>
        <SwiperSlide> <img src={image4} alt="Feedbacks" /> </SwiperSlide>
        <SwiperSlide> <img src={image5} alt="Feedbacks" /> </SwiperSlide>
        <SwiperSlide> <img src={image6} alt="Feedbacks" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carrosel