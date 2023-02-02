import React, { useContext, useEffect, useState } from 'react'
import Table from '../Table/Table';
import {context} from "../ContextApi/Context";
import "./TableNav.css"

const TableNav = () => {
  const {postTodo}=useContext(context);
  const [activity,setActivity]=useState("");
  
  const handleChange=(e)=>{
    setActivity(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(activity.length){
      postTodo({todo:[{activity}]});
      document.querySelector("input").value="";
    }
  }


  return (
    <div className='tableNav'>
        <div className='navBar'> 
              <input className='activity' type="text" onChange={handleChange} />
              <button className='addActivity' onClick={handleSubmit}>Add Activity</button>
        </div>
        <div>
            <Table/>
        </div>
    </div>
  )
}

export default TableNav;