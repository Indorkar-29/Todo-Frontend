import React from 'react'
import Table from '../Table/Table';

const TableNav = () => {
  return (
    <div className='tableNav'>
        <div className='navBar'> 
          <form method='POST' >
            <div>
              <input type="text" />
            </div>
            <button>Add Activity</button>
          </form>
        </div>
        <div>
            <Table/>
        </div>
    </div>
  )
}

export default TableNav;