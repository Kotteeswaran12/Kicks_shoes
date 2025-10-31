import './NewDrop.css'
import newDrop1 from '../assets/NewDrops/Rectangle 5.png'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function NewDrop() {

    useEffect(() => {
        // Wrap in context so GSAP runs after render
        const ctx = gsap.context(() => {
            gsap.from(".prodCard", {
                y: 40,
                opacity: 0,
                duration: 4,
                ease: "elastic.inOut",
                stagger: 0.4, // one by one
                scrollTrigger: {
                    trigger: ".NewOuter",
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                    
                },
            });
        });

        // Cleanup GSAP when component unmounts
        return () => ctx.revert();
    }, []);



    return (
        <div className="NewOuter" >
            <div className="NewInner">
                <div className="NewInnerMost">
                    <div className="NewHeading">
                        <h1>Don’t miss out <span>new drops</span></h1>
                        <button>SHOP NEW DROPS</button>
                    </div>
                    <div className="NewDrops" id='NewArrived'>

                        <div className="prodCard">
                            <div className="badge">new</div>
                            <img src={newDrop1} alt="" />
                            <p>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                            <button>View Product - <span>$125</span></button>
                        </div>

                        <div className="prodCard">
                            <div className="badge">new</div>
                            <img src={newDrop1} alt="" />
                            <p>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                            <button>View Product - <span>$125</span></button>
                        </div>

                        <div className="prodCard">
                            <div className="badge">new</div>
                            <img src={newDrop1} alt="" />
                            <p>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                            <button>View Product - <span>$125</span></button>
                        </div>

                        <div className="prodCard">
                            <div className="badge">new</div>
                            <img src={newDrop1} alt="" />
                            <p>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
                            <button>View Product - <span>$125</span></button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewDrop;