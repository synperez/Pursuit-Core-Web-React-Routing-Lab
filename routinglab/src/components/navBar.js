import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/navBar.css'

const NavBar = () =>{
    return(
        <nav>
            <NavLink exact to ={"/"}>Home</NavLink>
            <NavLink to ={"/dogs"}>Dogs</NavLink>
            <NavLink to ={"/dogbreeds"}>Dog Breeds</NavLink>
            <NavLink to ={"/moredogs"}>More Dogs</NavLink>
            <NavLink to ={"/cats"}>Cats</NavLink>
            <NavLink to ={"/morecats"}>More Cats</NavLink>
        </nav>
    )
}

export default NavBar