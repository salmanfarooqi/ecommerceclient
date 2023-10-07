import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carsols from '../../components/mainbody/carsols/Carsols';
import Footer from '../../components/footer/Footer';
// import {useSelector} from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';



const Home = () => {
  const [productdata, setProductData] = useState([]);
  
  const values=useSelector(state=>state.custom.values)
  console.log("home redux is",values)
  // setSearchByName(values)
  


  let getproductDetail = async () => {
    try {
      let response = await axios.get('http://localhost:8080/');
      let dataitem = response.data;
      setProductData(dataitem);
      console.log(dataitem);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  console.log("checking",undefined)

  useEffect(() => {

    document.title="Home"
    getproductDetail();
  }, []);
  let addToCart=async(id)=>{
    
    let jsondata={
      data:id
    }
    
  
  
  // alert(id)
         await axios.post('http://localhost:8080/addtocart',jsondata);
         console.log("json data")
  
  
  
      }

  return (
    <>

    <Carsols/>
    {/* <Slider/> */}
      <div className="card-wraper">

        {/* <div className='card'> */}
        
         {productdata.map((item) => (

!values || item.productName.toLowerCase().includes(values.toLowerCase().trim())

          ?(
         
            <div className="cards">
               <Link to={`/productDetail/${item._id}`} key={item._id} style={{textDecoration:'none'}}>
              <div className="card-image">
             
                <img src={item.productImage} alt="Deal" />
               
              </div>
              </Link>
              <div className="card-title">
                <h1>{item.productName}</h1>
              </div>
              {/* <div className="card-rating">***</div> */}
              <div className="card-price">
                <h1>{item.productPrice}</h1>
                {/* <h1>{values}</h1> */}
            
                  <img src="./images/bell.png" alt="Cart"  onClick={(e=>{addToCart(item._id)})}/>
              
              </div>
            </div>
          ):<h1 className='noproduct-text'>No product found</h1>

          
    
        ))}
     
      </div> 
      {/* </div> */}
      <Footer/>
      
    </>
  );
};

export default Home;
