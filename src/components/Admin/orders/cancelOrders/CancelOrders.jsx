import React from 'react'
import './todayOrder.css'
import { Link } from 'react-router-dom'
function CancelOrders() {
  return (
    <div className="CancelOrders-wraper">
      <Link to="/CancelOrdersRecord" style={{textDecoration:'none',color:'black'}}>  
      <div className="card">
         <div className="card-content">
         <img src='./images/user.png'></img>
            <h1>Cancel orders data</h1>
         </div>
            
        </div>
        </Link>
    </div>
  )
}

export default CancelOrders