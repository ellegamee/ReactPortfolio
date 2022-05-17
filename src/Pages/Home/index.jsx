import React from 'react';
import "./index.css"

import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css/bundle";
import { Navigation, Keyboard } from 'swiper';

export default function Home() {
    return (
        <div>
            <Swiper
                className="mySwiper"
                style={{ height: '100vh' }}
                modules={[Navigation, Keyboard]}
                centeredSlides={true}
                slidesPerView="auto"
                keyboard={{
                    enable: true, 
                    onlyInViewport: false
                }}
                navigation={true}
                rewind={true}
                slideToClickedSlide={true}
                initialSlide={3}
                mousewheel={true}
                onSlideChangeTransitionStart={(swiper) => {
                    swiper.update()
                }}
            >
                <SwiperSlide className='swiper-slide'>1</SwiperSlide>
                <SwiperSlide className='swiper-slide'>2</SwiperSlide>
                <SwiperSlide className='swiper-slide'>3</SwiperSlide>
                <SwiperSlide className='swiper-slide'>4</SwiperSlide>
                <SwiperSlide className='swiper-slide'>5</SwiperSlide>
                <SwiperSlide className='swiper-slide'>6</SwiperSlide>
                <SwiperSlide className='swiper-slide'>7</SwiperSlide>
            </Swiper>
        </div>
    )
}
