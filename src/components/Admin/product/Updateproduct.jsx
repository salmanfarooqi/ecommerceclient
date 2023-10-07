import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function UpdateProduct() {
    const { id } = useParams();

    const [productDetails, setProductDetails] = useState({});

    const [productdata,setproductdata]=useState([])
    let names;

    let getproductDetail = async () => {
        try {
            let response = await axios.get('http://localhost:8080/');
            let dataitem = response.data;
            setProductData(dataitem);
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    useEffect(() => {
        getproductDetail();
    }, []);

    useEffect(() => {
        const productToUpdate = productdata.find(item => item._id === id);
        if (productToUpdate) {
            setProductDetails(productToUpdate);
            // setName(productToUpdate.productName); // set name state here
            names=productToUpdate.productName
        }
    }, [productdata, id]);


    const [name, setName] = useState(names); // Initialize name as an empty string

    return (
        <div className="addproduct-wraper">
            <form>
                <div className="product">
                    <label>product Name</label>
                    <input
                        type="text"
                        name='name'
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* ... Rest of your form ... */}
                </div>
            </form>
        </div>
    );
}

export default UpdateProduct;
