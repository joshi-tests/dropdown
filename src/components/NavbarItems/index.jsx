import React, { useState } from "react";
import '../../App.css'
const NavbarItems = (props) => {
    const [open, setOpen] = useState(false)
    return(
        <li className="navbar-default"> 
            <a className="dropdown-item" onClick={ () => setOpen(!open)}>Whats Next?</a> 
            {open && props.children}
        </li>
    )
}
export { NavbarItems } ;
