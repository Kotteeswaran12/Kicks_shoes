import './NewDrop.css'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProdCards from './ProdCards'
import Btn from '../Components/Btn';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function NewDrop() {

    const Navigate = useNavigate();

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
                        {/* <Btn text={"SHOP NEW DROPS"} color={"#4A69E2"} onClick={Navigate("/Products")}></Btn> */}
                        <button onClick={()=> Navigate("/products")}>SHOP NEW DROPS</button>
                    </div>
                    <ProdCards ></ProdCards>
                </div>

            </div>
        </div>
    )
}

export default NewDrop;