import React from 'react'
import Slider from '../../mainbody/slider/Slider'
import './product.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function Product() {
    const [productdata, setProductData] = useState([]);
    let serialNo=1;

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


    let removeProduct=async(id)=>{

      const response = await axios.post("http://localhost:8080/deleteproduct", { id });
  console.log("Server response:", response.data);
  

  console.log("product is removed sucessfully",id)
    }

  return (
    <div className="product-wraper">
        
        <div className="add-product">
            <Link to="/addproduct"><button> add product</button></Link>
        </div>

        <div className="product-table">
            <table > 
                <thead>

                   
                    <tr>
                    <th>S.No</th>
                        <th>Product Name</th>
                        {/* <th>Product Description</th> */}
                        <th>Product Price</th>
                        <th>Delete product </th>
                        {/* <th>update</th> */}
                    </tr>
                
                </thead>
                <tbody>
                {productdata.map(item=>(
                          <tr>
                          <td>{serialNo++}</td>
                          <td>{item.productName}</td>
                          <td>{item.productPrice}</td>
                          <td><img src='./images/delete.png' width='30px' height='30px' onClick={(e)=>{removeProduct(item._id)}}></img></td>
                         <Link to={`/updateproduct/${item._id}`}><td>

                        {/* <img src='./images/update.jpg' width='30px' height='30px' onClick={(e)=>{removeProduct(item._id)}}></img> */}
                          
                          
                          
                          </td></Link> 
                          
                          {/* <td>shirt</td> */}
                      </tr>



                    ))}
                  


                    

                  


                </tbody>

            </table>
        </div>
    </div>
  )
}

export default Product;