import React from "react";
import '../../App.css'
const Navbar = (props) => {
    return(
        <ul className="navbar">{ props.children }</ul>
    )
}
export { Navbar } ;
