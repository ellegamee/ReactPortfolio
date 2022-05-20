import React from 'react';
import "./index.css"

import { Link } from 'react-router-dom';

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper';

import sudoku from '../../Assets/Images/sudoku.jpg'
import taskmanager from '../../Assets/Images/taskmanager.png'
import hangman from '../../Assets/Images/hangman.png'
import twitchbot from '../../Assets/Images/twitchbot.png'
import github from '../../Assets/Images/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png'

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
                    <div style={{color: 'white'}}>
                        <h2 style={{top: "26%", left: "-45%"}}>Gymnasiearbete</h2>
                        <a 
                        className="github_link" 
                        href="https://github.com/ellegamee/GymnasieArbete-2021" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{filter: "none"}}
                        >                        
                            <img src={github} alt=""/>
                        </a>
                        <p className='desc'>Sudoku game with board generating</p>
                        <p className='method'>Python, Tkinter, Keyboard</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img src={taskmanager} alt="" style={{height: "100%", left: "25%"}}/>
                    <div>
                        <h2 style={{top: "20%", left: "-35%"}}>Taskmanager</h2>
                        <a 
                        className="github_link" 
                        href="https://github.com/ellegamee/taskmanager" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >                        
                            <img src={github} alt=""/>
                        </a>
                        <p className='desc'>Simple taskmanager for seeing cpu usage</p>
                        <p className='method'>Python, Psutil, CLI</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{position: "relative", overflow: "hidden"}}>
                    <img src={hangman} alt="" style={{left: "10%", top: "30%", width: "480px"}}/>
                    <div>
                        <h2 style={{top: "11%", left: "-20%"}}>Hangman</h2>
                        <a 
                        className="github_link" 
                        href="https://github.com/ellegamee/GymnasieArbete-2021" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >                        
                            <img src={github} alt=""/>
                        </a>
                        <p className='desc'>Advanced hangman game played inside the CLI</p>
                        <p className='method'>Python, CLI</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{position: "relative", overflow: "hidden"}}>
                    <img src={twitchbot} alt="" className="projekt4" style={{top: "4%", width: "1200px"}}/>                
                    <div>
                        <h2 style={{top: "15%", left: "-25%"}}>Twitch Bot</h2>
                        <a 
                        className="github_link" 
                        href="https://github.com/ellegamee/twitch_bot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >                        
                            <img src={github} alt=""/>
                        </a>
                        <p className='desc'>Simple chat bot with easy expandability if needed</p>
                        <p className='method'>Python, Bot, CLI</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
