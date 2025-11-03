import { useState, useEffect, useRef } from 'react';
import '../Categories/categories.css'
import Category from '../Const/const';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';

const Categories = () => {
    const length = Category.length;
    const [display, setdesplay] = useState(0);
    const isRightDisable = display + 3 >= length;
    const isLeftdisable = display === 0;
    const containerRef = useRef(null);

    const isSmall = window.innerWidth <= 955;
    const smlMobile = window.innerWidth <= 580
    console.log("Small : " + smlMobile);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from('.products', {
                opacity: 0,
                x: 80,
                duration: 0.8,
                stagger: 0.4,
                ease: 'power2.inOut'
            })
        }, containerRef)
        return () => ctx.revert();


    }, [display])

    function moveLeft() {
        if (isSmall) {
            setdesplay(display - 1);

        } else {
            setdesplay(display - 3);
        }

    }

    function moverRight() {
        if (isSmall) {
            display < length ? setdesplay(display + 1) : setdesplay(0)
        } else {
            display < length ? setdesplay(display + 3) : setdesplay(0);
        }
    }

    function calculate() {
        let end = display + 3;
        if (smlMobile) end = display + 1;
        else if (isSmall) end = display + 2;

        return end;
    }
    return (
        <div className='outerLayer' ref={containerRef}>
            <div className="innerLayer">
                <div className="heading">
                    <h1>Category</h1>
                    <div className="navigation">
                        <button disabled={isLeftdisable} onClick={() => { moveLeft() }}><MdKeyboardArrowLeft size={15} /></button>
                        <button disabled={isRightDisable} onClick={() => { moverRight() }}  ><MdKeyboardArrowRight size={15} /></button>
                    </div>

                </div>

                <div className="items">
                    {
                        Category.slice(display, calculate()).map((category) => {
                            return (
                                <div className="products" key={category.id}>
                                    <img src={category.img} alt="" />
                                    <div className="details">
                                        <h2>{category.name}</h2>
                                        <button><MdArrowOutward></MdArrowOutward></button>
                                    </div>
                                </div>
                            )
                        })
                    }





                </div>

            </div>
        </div>
    );
}

export default Categories;
