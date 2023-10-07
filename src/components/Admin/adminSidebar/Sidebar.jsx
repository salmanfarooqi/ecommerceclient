import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className="sidebar-wraper">
         <div className="sidebar">
            <div className="admin-image">
                <img src='./images/user.png'></img>
            </div>
            <ul>
                <li><img src='./images/cart.png'></img><h2>Dashboard</h2></li>
              <Link to="/order"   style={{textDecoration:'none',color:"black"}}>  <li><img src='./images/cart.png'></img><h2>order</h2></li></Link>
                <li><img src='./images/cart.png'></img><h2>sales</h2></li>
                {/* <li><img src='./images/cart.png'></img><h2>product</h2></li> */}
                {/* <li><img src='./images/cart.png'></img><h2>Dashboard</h2></li> */}
                <Link to="/product"   style={{textDecoration:'none',color:"black"}}>  <li><img src='./images/cart.png'></img><h2>product</h2></li></Link>
               
            </ul>
         </div>
    </div>
  )
}

export default Sidebar