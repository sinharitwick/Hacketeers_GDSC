import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./Register.css"
import {Link, useNavigate} from 'react-router-dom'
import bgimg from '../components/images/registerimage.jpg';
export default function Register() {
    let navigate= useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handlename=(e)=>{
      setName(e.target.value);
    }
    const handleemail=(e)=>{
            setEmail(e.target.value);
    }
    const handlepass=(e)=>{
        setPassword(e.target.value);
}
    const register=async(e)=>{
        e.preventDefault();
        // const user=await axios.post('http://localhost:5000/api/user/signup',{name, email, password});
        const user=await axios.post('https://gdsc_clique-1-x1004983.deta.app/api/user/signup',{name, email, password});
        const data=user.data;
        localStorage.setItem('auth-token',data.userId);
        navigate('/feed');
    }
  return (
    <section className='login'>
     <div className="register">
      <div className="col-1">
        <h2>Sign Up</h2>
        <span>Sign up to enjoy our service</span>
        <form id='form'className='flex flex-col'>
          <input type="text" placeholder='Enter your name' value={name} onChange={handlename}/>
          <input type="email" placeholder='Enter your email id' value={email} onChange={handleemail}/>
          <input type="password" placeholder='Enter a password' value={password} onChange={handlepass
        }/>
          <button onClick={register} className='btn'>Sign Up</button>
          <span>Already have an account? <Link to="/login">Login</Link></span>
          <span><Link to="/">&#x2190; Back to Home </Link></span>
        </form>
      </div>
      <div className="col-2">
        <img src={bgimg}alt=""/>
      </div>
      </div> 
    </section>
  )
}