import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';

export const context=createContext();

export const ContextProvider = (props) => {
    const [email,setEmail]=useState("");
    const [todo,setTodo]=useState([]);
    const nav=useNavigate();

    const userSignIn=(loginData)=>{
        axios.post('https://todo-backend-9cdq.onrender.com/login',loginData)
        .then((res)=>{
            const token=res.data.token;
            localStorage.setItem("token",token);
            localStorage.setItem("email",loginData.email);
            nav('/todos');
            window.alert('Login Successful');
            document.location.reload();
            setEmail(loginData.email);
        }).catch((err)=>{
            window.alert(err.response.data.message);
        });
    }

    const userSignUp=(userData)=>{
        try{
            axios.post('https://todo-backend-9cdq.onrender.com/register',userData)
            .then((res)=>{
                nav('/');
                window.alert("Registration Successful");
            }).catch((err)=>window.alert(err.response.data.message));
        }catch(e){
            window.alert(e.message);
        }
    }

    const config={
        headers:{
            token:localStorage.getItem("token")
        }
    }

    const postTodo=async(TodoData)=>{
        return await axios.post('https://todo-backend-9cdq.onrender.com/create',TodoData,config)
        .then((res)=>console.log(res))
        .catch((err)=>{
            console.log(err.response.data.message);
        });
    }

    const fetchTodo=()=>{
        axios.get('https://todo-backend-9cdq.onrender.com/allTodo',config)
        .then((res)=>{
            const data=res.data.users[0].todo;
            setTodo(data);
        }).catch((err)=>console.log(err));
    }

    useEffect(()=>{
        fetchTodo();
    },[]);

  return (
    <context.Provider value={
        {
            todo,
            postTodo,
            userSignIn,
            userSignUp,
            email,
            fetchTodo
        }
    }>
        {props.children}
    </context.Provider>
  )
}

