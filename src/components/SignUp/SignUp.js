import React, { useContext, useEffect, useState } from 'react';
import {context} from "../ContextApi/Context";
import "./SignUp.css"

const SignUp = () => {
    const {userSignUp}=useContext(context);
    const [isSubmit,setIsSubmit]=useState(false);
    const [formErr,setFormErr]=useState({});
    const [userData,setUserData]=useState({email:"",password:""});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErr(validate(userData));
        setIsSubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(formErr).length === 0 && isSubmit){
            userSignUp(userData);
        }
    },[formErr]);

    const validate=(values)=>{
        const err={};
        const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/i
        if(!values.email){
            err.email="*email is required";
        }else if(!emailRegex.test(values.email)){
            err.email="*email is invalid";
        }
        if(values.password.length < 6){
            err.password="*password must contain atleast 6 characters";
        }else if(values.password.length > 12){
            err.password="*password must contain max 12 characters";
        }
        if(values.confirmPass !== values.password){
            err.confirmPass="*password does not matched !!!";
        }
        return err;
    }

  return (
    <div className='main'>
        <div className='register'>
            Register
        </div>
        <form style={{padding:"0px 50px 50px 50px"}} method='POST' onSubmit={handleSubmit}>
            <div >
                <input className='email' type="text" name="email" placeholder='Email Id' onChange={handleChange} />
            </div>
            <p style={{color:"red",margin:"auto",textAlign:"start",marginLeft:"36px"}}>{formErr.email}</p>
            <div >
                <input className='password' type="password" name="password" placeholder='Password' onChange={handleChange} />
            </div>
            <p style={{color:"red",margin:"auto",textAlign:"start",marginLeft:"36px"}}>{formErr.password}</p>
            <div >
                <input className='confirmPass' type="password" name="confirmPass" placeholder='Confirm Password' onChange={handleChange} />
            </div>
            <p style={{color:"red",margin:"auto",textAlign:"start",marginLeft:"36px"}}>{formErr.confirmPass}</p>
            <button className='submit'>Register</button>
        </form>
    </div>
  )
}

export default SignUp;