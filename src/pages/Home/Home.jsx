import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/cards/banner.png'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt='' className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title} alt="" className='caption-img'/>
                <p>Come join me in celebrating my 29th birthday. Let's have lots of food</p>
                <div className="hero-btns">
                <Link to="/play"> <button className='btn'><img src={play_icon} alt="Play" />Play</button></Link>
                    <button className='btn dark-btn'><img src={info_icon} alt="Play" />More Info</button>
                </div>
                <TitleCards title={"For Bunny"}/>
            </div>
         </div>
         <div className="more-cards">
            <TitleCards title={"Your Next Watch"}/>
            <TitleCards title={"Continue Watching for Bunny"} />
            <TitleCards title={"New on Netflix"}/>
            <TitleCards title={"Top Picks for you"}/>
         </div>
    <Footer/>
    </div>
  )
}

export default Home