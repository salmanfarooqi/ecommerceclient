import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { CiCircleRemove } from 'react-icons/ci';

const Cart=()=>{
  const [productdata, setProductData] = useState([]);
  // const [productId,setproductId]=useState([])
  const [productIds, setProductIds] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);
  const [quantities, setQuantities] = useState({});
  let storeid=[]
  let total;
  const [totals,settotals]=useState(0)

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


   let getproductId = async () => {
    try {
      let response = await axios.get('http://localhost:8080/cart');
      let dataitem = response.data;
      let ids = dataitem.map(item => item._id);
     setProductIds(dataitem);
      console.log("id",dataitem);
    } catch (error) {
      console.log('Error: ', error);
    }
  };
  useEffect(() => {
    getproductId();
  }, []);

  productIds.map((item)=>{

    storeid.push(item.id)
    console.log("Array",storeid)
  })
  const handleQuantityChange = (productId, event) => {
    setQuantities({
        ...quantities,
        [productId]: parseInt(event.target.value, 10)
    });
  }

   // Compute the subtotal

const computeSubtotal = () => {
  
  const relevantItems = productdata.filter(item => storeid.includes(item._id));

  
  const products = relevantItems.map(item => (quantities[item._id] || 1) * Number(item.productPrice));

  // Use a for loop to sum up the products.
  let sum = 0;
  for(let i = 0; i < products.length; i++) {
      sum += products[i];
  }

  return sum;


};


let removeproduct=async(id)=>{

  const deleteproduct={

    id:id
  }

  const response = await axios.post("http://localhost:8080/deleteproducts", { id });
  console.log("Server response:", response.data);
  

  console.log("product is removed sucessfully",id)
}
  
  return (
    <div className="cart-wraper">
      <table>
        <thead className='product-detail-table'>
        <tr>
          
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>quantity</th>
          <th>remove</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>

           {
             
              
               productdata.map(item => (

                storeid.includes(item._id)?(
                
                        <tr>
              
            <td><img src={item.productImage} width="40px" height="40px"></img></td>
            <td>{item.productName}</td>
            <td>{item.productPrice}</td>
            <td>
              <select
            value={quantities[item._id] || 1} 
                                            onChange={(e) => handleQuantityChange(item._id, e)}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            
                                            {/* ... more options ... */}
                                        </select>
              
              
              </td>
            <td><CiCircleRemove className="remove-icons"  onClick={(e)=>{removeproduct(item._id)}}/></td>
            <td>{(quantities[item._id] || 1) * Number(item.productPrice)}</td>

            </tr>
                ):""
          

         ))

         }


          
        </tbody>
        
      
        
      </table>
      <div className='subtotal'>
            <h3>subtototal</h3>
            <h1 className='price'>{computeSubtotal()}</h1>
          </div>
          <button>proced to checkout</button>


    
    </div>
    
    
  )
}
export default Cart;