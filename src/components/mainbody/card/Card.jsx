import { useEffect, useState } from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Card = () => {
  // console.log("name is ",name)
  

  
  const [productdata, setProductData] = useState([]);

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

  useEffect(() => {
    getproductDetail();
  }, []);

  return (
    <>
      <div className="card-wraper">
        
         {productdata.map((item) => (
          item.categrie=="laptops"
          
          ?(
          
            <div className="card">
           
              <div className="card-image">
              <Link to="/productDetail" key={item.id} style={{textDecoration:'none'}}>
                <img src="./images/deal1.png" alt="Deal" />
                </Link>
              </div>
              
              <div className="card-title">
                <h1>{item.productName}</h1>
                {console.log("catgr",item.categrie)}
              </div>
              <div className="card-rating">***</div>
              <div className="card-price">
                <h1>{item.productPrice}</h1>
               
                <img src="./images/bell.png" alt="Cart"  />
            
                
              </div>
            </div>
          ):null
        
        ))}
      </div> 
    
      

    </>
  );
};

export default Card;
