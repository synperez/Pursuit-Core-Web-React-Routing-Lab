import React, { Component } from 'react'



const Select = ({selectHandle}) =>{
   const popSelect = () =>{

    let arr = [];

    for (let i = 1; i <= 50; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }

    return arr
        
 
    }

    return(
        <select onChange={selectHandle}>{popSelect()}</select>
    )
}

export default Select