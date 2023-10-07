import React, { useEffect, useState } from 'react';
import './productDetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [productdata, setProductData] = useState([]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get('http://localhost:8080/');
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, []);

    const addToCart = async () => {
        try {
            await axios.post('http://localhost:8080/addtocart', { data: id });
            console.log("Product added to cart");
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    };

    return (
        <div className="product-wraper">
            {
                productdata.map(item => {
                    if (id === item._id) {
                        return (
                            <React.Fragment key={item._id}>
                                <div className="image-section">
                                    <div className="main-image">
                                        <img src={item.productImage} alt={item.productName} />
                                    </div>
                                </div>

                                <div className="productDetail-section">
                                    <h1 className='product-name'>{item.productName}</h1>
                                    <h2 className='product-description'>{item.productDescription}</h2>
                                    <h1 className='product-price'>Price: {item.productPrice}</h1>
                                    <div className="cart-section">
                                        <button onClick={addToCart}>Add to Cart</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    }
                    return null; // If id doesn't match, don't render anything.
                })
            }
        </div>
    );
}

export default ProductDetail;
