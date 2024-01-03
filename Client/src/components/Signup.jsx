import React from 'react'
import {  useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });
     
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, phone, password, cpassword
            })
        });

        const data = await res.json();

        if(res.status === 433 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }else{
            window.alert("Registration Successfull!");
            console.log("Registration Successfull!");

            navigate("/signin");
        }
    }

  return (
    <div>
        <div className="login-page" style={{backgroundImage: 'url("/images/blackbg.jpeg")'}}>
        <div className="wrapper">
        <form className="login-form" action="POST" method="POST"/>
            
            <h1 style={{color:'red', fontWeight:'bold'}}>Signup</h1>

            <div className="input-box">
                <label htmlFor="username"></label>
                <i class='bx bxs-user' ></i>
                <input type="text"  name="name" id="name" autoComplete='off'
                    onChange={handleInputs} 
                    placeholder='Username' value={user.name}/>
                <span id="username-error" ></span>
            </div>
    
            <div className="input-box">
                <label htmlFor="email"></label>
                <i class='bx bx-mail-send' ></i>
                <input type="email" name="email" id="email" autoComplete='off'
                    onChange={handleInputs} 
                    placeholder='Email' value={user.email}/>
                <span id="email-error" ></span>
            </div>

            <div className="input-box">
                <label htmlFor="phone"></label>
                <i class='bx bx-mobile' ></i>
                <input type="number" name="phone" id="phone" autoComplete='off'
                    onChange={handleInputs} 
                    placeholder='Phone number' value={user.phone}/>
                <span id="phone-error" ></span>
            </div>

            <div className="input-box">
                <label htmlFor="password"></label>
                <i class='bx bxs-lock-alt' ></i>
                <input type="password" name="password" id="password" autoComplete='off'
                    onChange={handleInputs}
                    placeholder='Password' value={user.password}/>
                <span id="password-error" ></span>
            </div>

            <div className="input-box">
                <label htmlFor="cpassword"></label>
                <i class='bx bxs-lock-alt' ></i>
                <input type="password" name="cpassword" id="cpassword" autoComplete='off'
                    onChange={handleInputs}
                     placeholder='Re-enter Password' value={user.cpassword}/>
                <span id="cpassword-error" ></span>
            </div>
 
            <input className='form-btn' type='submit' name='signup' 
                value='register' onClick={PostData}/>
                
            <div className="register-link">
                
               <p><Link to="/signin" style={{color:'red'}}>Login</Link></p> 
                
            </div>

            </div>

        <form/>
        </div>
    </div>
  )
}

export default Login