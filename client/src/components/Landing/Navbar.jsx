import React,{useState} from "react";
import {Link}from 'react-scroll';
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
            <Link to= 'main' className='logo' smooth={true} duration={200}>
                <img src= {logo} alt=''/>
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="products"smooth={true} duration={500}>Features</Link></li>
                <li><Link to="about"smooth={true} duration={500}>About</Link></li>
                <li><Link to="contact"smooth={true} duration={500}>Contact Us</Link></li>
                <li><Link smooth={true} duration={500}>Login</Link></li>
                <li><Link smooth={true} duration={500}>SIGn UP</Link></li>

            </ul>

        </nav>
    )
}
export default Navbar;