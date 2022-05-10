import React from 'react';
import "./index.css"

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import 'swiper/css/navigation'

import { Navigation, Keyboard } from 'swiper';

export default function Home() {
    return (
        <div>
            <Swiper
                style={{ width: '100%', height: '100vh' }}
                modules={[Navigation, Keyboard]}
                slidesPerView={4}
                centeredSlides={true}
                keyboard={{
                    enable: true, 
                    onlyInViewport: false
                }}
                navigation={true}
            >
                <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
                <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}
