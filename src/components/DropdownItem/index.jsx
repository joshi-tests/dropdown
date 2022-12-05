import React from "react";
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import '../../App.css'

const DropdownItem = (props) => {

    return(
        <div className="dropdown-item hover" onClick={() => {
            props.goToMenu && props.menuSlider(props.goToMenu)}
            }>
            { props.left && <span><AiFillCaretLeft/></span>}
            {!props.left && props.children}
            { props.right && <span> <AiFillCaretRight/> </span>}
        </div>
    )
}

export { DropdownItem }