import React from 'react'
import './HeroSection.css'
import bgImg from '../assets/HeroImgs/image 14.png'
import smlImg1 from '../assets/HeroImgs/Rectangle 1.png'
import smlImg2 from '../assets/HeroImgs/Rectangle 2.png'


const HeroSection = () => {


  return (
    <div className='Outer'>
      <h1>Do It <span>Right</span></h1>
      <div className="main">
        <div className="sideContent">
          <p>Nike product of the year</p>
        </div>
        <img src={bgImg} alt="" />
        {/* <img src={smlImg2} alt="" className='smImg' />
            <img src={smlImg1} alt=""  className='smImg'/> */}
        <div className="smlImg">
          <img src={smlImg2} alt="" />
          <img src={smlImg1} alt="" />
        </div>

        <div className="content">
          <h1>NIKE AIR MAX</h1>
          <p>Nike introducing the new air max for everyone's comfort</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection