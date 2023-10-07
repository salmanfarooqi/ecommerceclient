import React from 'react'
// import './canc
import { Link } from 'react-router-dom'
function PendingOrders() {
  return (
    <div className="CancelOrders-wraper">
      <Link to="/pendingOrdersRecords" style={{textDecoration:'none',color:'black'}}>  
      <div className="card">
         <div className="card-content">
         <img src='./images/user.png'></img>
            <h1>pinding orders</h1>
         </div>
            
        </div>
        </Link>
    </div>
  )
}

export default PendingOrders