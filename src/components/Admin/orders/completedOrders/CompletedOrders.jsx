import React from 'react'
// import '../todayOrder.css'
import { Link } from 'react-router-dom'
function CompletedOrders() {
  return (
    <div className="CancelOrders-wraper">
      <Link to="/CompletOrdersRecords" style={{textDecoration:'none', color:'black'}}>  
      
      <div className="card">
         <div className="card-content">
         <img src='./images/user.png'></img>
            <h1>completed orders</h1>
         </div>
            
        </div>
        </Link>
    </div>
  )
}

export default CompletedOrders