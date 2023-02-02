import React from 'react'
import SideBar from '../SideBar/SideBar';
import TableNav from '../TableNav/TableNav';
import "./Header.css"

const Header = () => {
    const user=localStorage.getItem("email").split("@")[0].toUpperCase();
  return (
    <div>
        <div className='header'>
            <p style={{marginRight:"200px"}} >{user}</p>
        </div>
        <div className='side'>
            <SideBar/>
        </div>
        <div>
          <TableNav/>
        </div>
    </div>
  )
}

export default Header;