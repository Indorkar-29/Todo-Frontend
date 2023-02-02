import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./SideBar.css"

const SideBar = () => {
    const navigate=useNavigate();
  return (
    <div className='sideBar'>
        <div className='heading'>
            To do List
        </div>
        <div className='history'>
            History
        </div>
        <div className='logout'>
            <p className='out' onClick={()=>{
                localStorage.removeItem("token");
                navigate('/');
                window.alert("Logged Out Successfully");
                document.location.reload();
            }}>Log Out</p>
        </div>
    </div>
  )
}

export default SideBar;