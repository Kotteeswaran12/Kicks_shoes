import React from 'react';
import '../HeroSection/HomePage.css'
// import shoe from '../assets/Default_cute_white_and_pink_sneaker_cross_trainers_in_with_bea_1 (1).png'
const HomePage = () => {
    return (
        <div className="outerMost">
            <div className="outer">
                <div className="inner">
                    <div className="left">
                        <h1>Air Jordon</h1>
                        <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <div className="btns">
                            <button>Buy now</button>
                            <button>More &gt; </button>
                        </div>
                    </div>

                    <div className="VerticalLine"></div>
                    <div className="VerticalLine"></div>
                    <div className="VerticalLine"></div>
                    <div className="VerticalLine"></div>

                    <div className="showCase">
                        <img src={shoe} alt="" />
                    </div>
                    <h1>Airjordons</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
