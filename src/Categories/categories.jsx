import { useState } from 'react';
import '../Categories/categories.css'
import Category from '../Const/const';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Categories = () => {
   
    return (
        <div className='outerLayer'>
            <div className="innerLayer">
                <div className="heading">
                    <h1>Category</h1>
                    <div className="navigation">
                        <button><MdKeyboardArrowLeft  size={15}/></button>
                        <button><MdKeyboardArrowRight size={15}/></button>
                    </div>

                </div>

                <div className="items">
                    {
                        Category.map((category) => {
                            return (<div className="products" key={category.id}>
                                <img src={category.img} alt="" />
                            </div>)
                        })
                    }





                </div>

            </div>
        </div>
    );
}

export default Categories;
