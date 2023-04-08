import React,{useState} from "react";
import { Link as LinkRoll }from 'react-scroll';
import { Link } from "react-router-dom";
import logo from '../images/logo1.jpg'
function Navbar(){
    const[nav,setnav]=useState(false);
    const changeBackground=()=>{
        if (window.scrollY >=50){
            setnav(true);
        }
        else{setnav(false);}
    }
    window.addEventListener('scroll',changeBackground);
    return(
        <nav className={nav ? "nav active":"nav"}>
            <LinkRoll to= 'main' className='logo' smooth={true} duration={200}>
                <img src= {logo} alt=''/>
            </LinkRoll>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><LinkRoll to="main" smooth={true} duration={500}>Home</LinkRoll></li>
                <li><LinkRoll to="products"smooth={true} duration={500}>Features</LinkRoll></li>
                <li><LinkRoll to="about"smooth={true} duration={500}>About</LinkRoll></li>
                <li><LinkRoll to="contact"smooth={true} duration={500}>Contact Us</LinkRoll></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
            </ul>

        </nav>
    )
}
export default Navbar;