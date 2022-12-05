import React, { useState } from "react";
import { DropdownItem } from "../DropdownItem";
import {CSSTransition} from 'react-transition-group';
import '../../App.css'

const Dropdown = () => {
    const [activeMenu,setActiveMenu] = useState('default')
    const [menuHeight, setMenuHeight] = useState(null);
    const menuSlider = (menu) => setActiveMenu(menu)
    const calcHeight = (e) => {
        const height = e.offsetHeight;
        setMenuHeight(height);
    }
    return (
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition
            in={activeMenu === 'default'}
            unmountOnExit
            timeout={500}
            classNames={'menu-primary'}
            onEnter={calcHeight}
            >
                <div>
                    <DropdownItem goToMenu='orders' menuSlider={menuSlider} right = {true}>Create</DropdownItem>
                    <DropdownItem goToMenu='orders' menuSlider={menuSlider} right = {true}>Shipping</DropdownItem>
                    <DropdownItem goToMenu='orders' menuSlider={menuSlider} right = {true}>Ready to pickUp</DropdownItem>
                    <DropdownItem goToMenu='orders' menuSlider={menuSlider} right = {true}>Complete</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
            in={activeMenu === 'orders'}
            unmountOnExit
            timeout={500}
            classNames={'menu-secondary'}
            onEnter={calcHeight}>
                <div>
                    <DropdownItem goToMenu = 'default' menuSlider={menuSlider} left = {true}>Back</DropdownItem>
                    <DropdownItem>123456</DropdownItem>
                    <DropdownItem>234432</DropdownItem>
                    <DropdownItem>2342352</DropdownItem>
                    <DropdownItem>All</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )

}
export { Dropdown }