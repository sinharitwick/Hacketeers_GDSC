import React,{useEffect,useState} from 'react'
import axios from 'axios';
import "./Login.css"
import {useNavigate} from 'react-router-dom'
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
          <input type="text" placeholder='username' value={email} onChange={handleemail}/>
          <input type="password" placeholder='password' value={password} onChange={handlepass
        }/>
          <button onClick={login} className='btn'>Login</button>
        </form>
      </div>
      <div className="col-2">
        <img src={bgimg}alt=""/>
      </div>
      </div> 
    </section>
  )
}