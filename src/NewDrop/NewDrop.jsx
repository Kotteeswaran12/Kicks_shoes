import './NewDrop.css'
import newDrop1 from '../assets/NewDrops/Rectangle 5.png'
import { useEffect } from 'react';
function NewDrop() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                   
                    entry.target.classList.add("show");
                } 
            });
        }, { threshold: 0 })

        const elements = document.querySelectorAll(".prodCard");
        elements.forEach(ele => observer.observe(ele))
    }, [])


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