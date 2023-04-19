import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./Login.css"
import {Link, useNavigate} from 'react-router-dom'
import bgimg from '../components/images/userimg.jpg';
export default function Login() {
    let navigate= useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleemail=(e)=>{
            setEmail(e.target.value);
    }
    const handlepass=(e)=>{
        setPassword(e.target.value);
}
    const login=async(e)=>{
        e.preventDefault();
        const user=await axios.post('http://localhost:5000/api/user/login',{email,password});
        // const user=await axios.post('/api/user/login',{email,password});
        const data=user.data;
        localStorage.setItem('auth-token',data.userId);
        navigate('/feed');
    }
  return (
    <section className='login'>
     <div className="register">
      <div className="col-1">
        <h2>Sign In</h2>
        <span>Login and enjoy our service</span>
        <form id='form'className='flex flex-col'>
          <input type="email" placeholder='Enter email' value={email} onChange={handleemail}/>
          <input type="password" placeholder='Enter password' value={password} onChange={handlepass}/>
          <button onClick={login} className='btn'>Login</button>
          <span>Don't have an account? <Link to="/register">Sign Up</Link></span>
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