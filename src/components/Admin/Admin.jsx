import React from 'react'
import './admin.css'
import Sidebar from './adminSidebar/Sidebar'
import Main from './orders/Main'

function Admin() {
  return (
    <div className="admin-wraper">
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="main-body">
        <Main/>
    </div>
    </div>
  )
}

export default Admin