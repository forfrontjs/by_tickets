import React from 'react'
import Photo1 from './images/jene_tsum.png'
import Photo2 from './images/paradise.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={Photo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Photo2} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
