import React, { act, useState } from 'react';
import '../Review/Review.css'
import { TiStar } from "react-icons/ti";
import reviewImg1 from '../assets/ReviewAssets/image 38.png';
import { BsPersonFill } from "react-icons/bs";
import spider from '../assets/profile/Spider.png'
import iron from '../assets/profile/ion.png'
import deadpool from '../assets/profile/deadpool.png'
const Review = () => {
    const [active, setActive] = useState(false);
    return (
        <div className="ReviewSection">
            <div className="ReviewHeading">
                <h1>Review</h1>
                <button>SEE all</button>
            </div>
            <div className="ReviewCards">
                <div className={`Review`} onClick={(e) => {
                    document.querySelectorAll(".Review").forEach((card) => {
                        card.classList.remove("show");
                    });
                    e.currentTarget.classList.add("show");
                }
                }>

                    <div className="Reviewcmd" >
                        <h4>Good Quality</h4>
                        <p>I highly recommend shopping from kicks</p>
                        <div className="Star">
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <p>5.0</p>
                        </div>

                    </div>

                    <div className="Profile"><img src={spider} alt="" /></div>

                    <div className="ReviewImg">
                        <img src={reviewImg1} alt="" />
                    </div>
                </div>

                <div className={`Review `} onClick={(e) => {
                    document.querySelectorAll(".Review").forEach((card) => {
                        card.classList.remove("show");
                    });
                    e.currentTarget.classList.add("show");
                }
                }>

                    <div className="Reviewcmd" >
                        <h4>Good Quality</h4>
                        <p>I highly recommend shopping from kicks</p>
                        <div className="Star">
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <p>5.0</p>
                        </div>

                    </div>

                    <div className="Profile"><img src={deadpool} alt="" /></div>

                    <div className="ReviewImg">
                        <img src={reviewImg1} alt="" />
                    </div>
                </div>

                <div className={`Review `} onClick={(e) => {
                    document.querySelectorAll(".Review").forEach((card) => {
                        card.classList.remove("show");
                    });
                    console.log(e.target.classList);
                    e.currentTarget.classList.add("show");
                }
                }>

                    <div className="Reviewcmd" >
                        <h4>Good Quality</h4>
                        <p>I highly recommend shopping from kicks</p>
                        <div className="Star">
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <p>5.0</p>
                        </div>

                    </div>

                    <div className="Profile"><img src={iron} alt="" /></div>

                    <div className="ReviewImg">
                        <img src={reviewImg1} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Review;
