import React from 'react';
import "./index.css"

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper';

import sudoku from '../../Assets/Images/sudoku.jpg'
import taskmanager from '../../Assets/Images/taskmanager.png'
import hangman from '../../Assets/Images/hangman.png'
import twitchbot from '../../Assets/Images/twitchbot.png'

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
                mousewheel={true}
                onSlideChangeTransitionStart={(swiper) => {
                    swiper.update()
                }}
            >
                <SwiperSlide className='swiper-slide'>
                    <img src={sudoku} alt="" className="projekt1" style={{height: "100%"}}/>
                    <div>Gymnasiearbete</div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={taskmanager} alt="" style={{height: "100%", left: "25%"}}/>
                    <div>Taskmanager</div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{position: "relative", overflow: "hidden"}}>
                    <img src={hangman} alt="" style={{left: "10%", top: "30%", width: "480px"}}/>
                    <div>Hangman</div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{position: "relative", overflow: "hidden"}}>
                    <img src={twitchbot} alt="" className="projekt4" style={{top: "4%", width: "1200px"}}/>                
                    <div>Twitch Bot</div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
