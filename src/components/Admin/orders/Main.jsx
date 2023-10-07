import React from 'react'

import CompletedOrders from './completedOrders/CompletedOrders'
import PendingOrders from './pendingOrder/PendingOrders'
import './main.css'
import CancelOrders from './cancelOrders/CancelOrders'

function Main() {
  return (
    <>
    <div className="main-wraper">
      
        <div className="main-cards">
        <CancelOrders/>   
    <CompletedOrders/>
  
   <PendingOrders/>

        </div>
  
    

    </div>
    
    </>
  )
}

export default Main