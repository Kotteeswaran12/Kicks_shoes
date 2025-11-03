import './NewDrop.css'
import newDrop1 from '../assets/NewDrops/Rectangle 5.png'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useNavigate } from 'react-router-dom';
import { NewDrops } from '../Const/const'
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

    const Navigate = useNavigate()


    return (
        <div className="NewOuter" >
            <div className="NewInner">
                <div className="NewInnerMost">
                    <div className="NewHeading">
                        <h1>Don’t miss out <span>new drops</span></h1>
                        <button>SHOP NEW DROPS</button>
                    </div>
                    <div className="NewDrops" id='NewArrived'>


                        {
                            NewDrops.map((prod, i) => {
                                return (<div className="prodCard" key={i}>
                                    <div className={`badge ${prod.badge}`}>{prod.badge}</div>
                                    <img src={newDrop1} alt="" onClick={() => {
                                        Navigate('/productDetails', {
                                            state: {
                                                img: newDrop1,
                                                name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
                                                price: "$125"
                                            }
                                        })
                                    }} />
                                    <p>{prod.name}</p>
                                    <button onClick={() => {
                                        Navigate('/productDetails', {
                                            state: {
                                                img: newDrop1,
                                                name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
                                                price: "$125"
                                            }
                                        })
                                    }}>View Product - <span>{prod.price}</span></button>
                                </div>)

                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewDrop;