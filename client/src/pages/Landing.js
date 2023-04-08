import { useEffect, useState } from 'react';
import React from 'react';
import './Landing.css';
import Navbar from '../components/Landing/Navbar';
import Header from '../components/Landing/Header';
import Products from '../components/Landing/Products';
import About from '../components/Landing/About';
import Contact from '../components/Landing/Contact';
import Footer from '../components/Landing/Footer';
import {css} from "@emotion/react";
import ScaleLoader from 'react-spinners/ScaleLoader';


function Landing() {

  const[loading,setloading]= useState(false);
  // const override =css`
  // display:block;
  // border-color:red;
  // margin-top:20%;`;
  useEffect(()=>{
    setloading(true);
    setTimeout(() => {
    setloading(false)
    }, 1000);
  },[])

  return (
    <div className="Landing">
      {
        loading?<ScaleLoader color={"#3d2514"} loading={loading} cssOverride={{display:"block",
          borderColor:"red",
          marginTop:"20%",alignItems:"center",justifyContent:"center"}} size={50} margin={25}/>
        :
        <>"
        <Navbar/>
        <Header/>
        <Products/>
        <About/>
        <Contact/>
        <Footer/>
        </>
      }

    </div>
  );
}

export default Landing;
