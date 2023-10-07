import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { ImYoutube } from 'react-icons/im';

function Footer() {
  return (
    <div className='footer-wraper'>
      <div className="address-section">
        <h2>Adress</h2>
        <h3>Office :  sardheri bazar </h3>
        <h3>Email  :   Ecommerce@gmail.com</h3>
        <h3>phone  :    0343422444</h3>
      </div>

      <div className="Quicklink-section">
        {/* <Link to="/"></Link> */}
        <h2>Quick Links</h2>
        {/* <h3>Home</h3> */}
        {/* <Link to="/cart" style={{textDecoration:'none'}}><img src='./images/cart.png' ></img></Link>  */}
       {/* <Link to="/signup"><h3>Home</h3></Link>  */}
       <Link to="/Home" style={{ textDecoration: 'none' }}> <li> Home </li></Link>
              <Link to="/aboutus" style={{ textDecoration: 'none' }}> <li> About </li></Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}> <li> Contact </li></Link>
              <Link to="/cart" style={{ textDecoration: 'none' }}> <li> Cart </li></Link>
              <Link to="/signup" style={{ textDecoration: 'none' }}> <li> signup </li></Link>
        
      </div>

      
      <div className="followus-section">
        <h2>Follow Us</h2>
        <div className="icons">
          <ul>
       <li><BsFacebook /></li> 
        <li><BiLogoInstagramAlt/></li>
        <li><ImYoutube/></li>
        </ul>
        </div>


      </div>
    

      
    </div>

  
  )
}

export default Footer