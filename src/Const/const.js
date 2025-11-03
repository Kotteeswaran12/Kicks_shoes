import prod1 from '../assets/Categories/prod1.png'
import prod2 from '../assets/Categories/prod2.png'

let Category = [
    {
        id: 1,
        img: prod1,
        name: "Products1"
    }
    ,
    {
        id: 2,
        img: prod2,
        name: "Products2"
    },
    {
        id: 3,
        img: prod1,
        name: "Products3"
    }
    ,
    {
        id: 4,
        img: prod2,
        name: "Products4"
    }
    ,
    {
        id: 5,
        img: prod2,
        name: "Products5"
    },
    {
        id: 6,
        img: prod1,
        name: "Products1"
    }
    ,
    {
        id: 7,
        img: prod2,
        name: "Products1"
    },
    {
        id: 8,
        img: prod1,
        name: "Products1"
    }
    ,
    {
        id: 9,
        img: prod2,
        name: "Products1"
    }
]

import newDrop1 from '../assets/NewDrops/Rectangle 5.png'
// const Cards = () => {
//     return (
//         <div className="prodCard">
//             <div className="badge">new</div>
//             <img src={newDrop1} alt="" />
//             <p>ADIDAS 4DFWD X PARLEY RUNNING SHOES</p>
//             <button onClick={() => {
//                 Navigate('/productDetails', {
//                     state: {
//                         img: { newDrop1 },
//                         name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
//                         price: "$125"
//                     }
//                 })
//             }}>View Product - <span>$125</span></button>
//         </div>
//     )
// }


let NewDrops = [
    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "new"
    },
    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "Hot"
    },
    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "10% off"
    },

    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "Hot"
    },

]


export {
    Category,
    NewDrops
}; 