import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {context} from "../ContextApi/Context";
import "./SignIn.css"

const SignIn = () => {
    const navigate=useNavigate();
    const {userSignIn}=useContext(context);
    const [userDetail,setUserDetail]=useState({email:"",password:""});
    const [error,setError]=useState({});
    const [submit,setSubmit]=useState(false);

    const handleChange=(e)=>{
        setUserDetail({...userDetail,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError(validate(userDetail));
        setSubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(error).length===0 && submit){
            userSignIn(userDetail);
        }
    },[error]);

    const validate=(values)=>{
        const err={};
        const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/i
        if(!values.email){
            err.email="*email is required";
        }else if(!emailRegex.test(values.email)){
            err.email="*email is invalid";
        }
        if(!values.password){
            err.password="*password is required";
        }
        return err;
    }

  return (
    <div className='main'>
        <div className='login'>
            Member Login
        </div>
        <form style={{padding:"0px 50px 15px"}} method='POST' onSubmit={handleSubmit}>
            <div>
                <input className='email' type="text" name='email' placeholder='User ID' onChange={handleChange}/>
            </div>
            <p style={{color:"red",margin:"auto",textAlign:"start"}} >{error.email}</p>
            <div>
                <input className='password' type="password" name='password' placeholder='Password' onChange={handleChange} />
            </div>
            <p style={{color:"red",margin:"auto",textAlign:"start"}} >{error.password}</p>
            <button className='logBtn'>Login</button>
        </form>
        <button className='reg' onClick={()=>navigate('/register')} >SignUp</button>
    </div>
  )
}

export default SignIn;