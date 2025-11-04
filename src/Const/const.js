import prod1 from '../assets/Categories/prod1.png'
import prod2 from '../assets/Categories/prod2.png'

let Category = [
    {
        id: 1,
        img: prod1,
        name: "Products1",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    }
    ,
    {
        id: 2,
        img: prod2,
        name: "Products2",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },
    {
        id: 3,
        img: prod1,
        name: "Products3",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    }
    ,
    {
        id: 4,
        img: prod2,
        name: "Products4",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    }
    ,
    {
        id: 5,
        img: prod2,
        name: "Products5",
        price: "$125",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },
    {
        id: 6,
        img: prod1,
        name: "Products1",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    }
    ,
    {
        id: 7,
        img: prod2,
        name: "Products1",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },
    {
        id: 8,
        img: prod1,
        name: "Products1",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    }
    ,
    {
        id: 9,
        img: prod2,
        name: "Products1",
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
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
        badge: "new",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },
    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "Hot",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },
    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "10% off",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },

    {
        img: newDrop1,
        name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
        price: "$125",
        badge: "Hot",
        size: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        color: ["red", "black", "green", "Blue"]
    },

]


export {
    Category,
    NewDrops
}; 