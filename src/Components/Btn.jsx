import React from 'react'

const Btn = ({text , color} ) => {
 
  return (
    <div>
        <button
            style={{
                width:'100%',
                border:'none',
                padding:"10px  30px",
                backgroundColor:color,
                color:'white',
                fontFamily:'sans-serif',
                cursor:'pointer',
                fontWeight:'bolder',
                borderRadius:'5px'
            }}
        >{text}</button>
    </div>
  )
}

export default Btn