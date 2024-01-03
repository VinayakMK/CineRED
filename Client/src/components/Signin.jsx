import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../App.css';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        
    const loginUser = async (e) => {
        e.preventDefault();
        
        const res = await fetch('/signin', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        }else{
            window.alert("Successfully logged in!");
            navigate("/");
        }
    }
  return (
    <>
    <div className="login-page" style={{backgroundImage: 'url("/images/blackbg.jpeg")'}}>
        <div className="wrapper">
        <form className="login-form" action="POST" method="POST"/>
            
            <h1 style={{color:'red', fontWeight:'bold'}}>Login</h1>

            <div className="input-box">
                <label for="username"></label>
                <i className='bx bxs-user' ></i>
                <input type="email" name="email" id="email" autoComplete='off' 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    placeholder='Email'/>
                <span id="username-error" ></span>
            </div>
    
            <div className="input-box">
                <label for="password"></label>
                <i className='bx bxs-lock-alt' ></i>
                <input type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    placeholder='Password'/>
                <span id="password-error" ></span>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password</a>
            </div>
                    
            <input className='form-btn' type='submit' name='signin' id='signin'
                value="Login"
                onClick={loginUser}/>
                
            <div className="register-link">
                <p>Don't have an account?</p>
                <p><Link to="/signup" style={{color:'red'}}>Register</Link></p>
                
            </div>

            </div>

        <form/>
    </div>
    </> 
  )
}

export default Login