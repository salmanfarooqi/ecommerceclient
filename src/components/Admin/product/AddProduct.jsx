import React, { useState } from 'react';
import './addproduct.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';

function AddProduct() {

  const [preview,setPreview]=useState('')

  const validationSchema = yup.object({
    productName: yup.string().required('productName is required'),
    productDescription: yup.string().required('productDescription is required'),
    productPrice: yup.number().min(0, 'Price must by greater than 0').required('Price is required'),
    categrie: yup.string().required("categories is a must")
  });

  const formik = useFormik({
    initialValues: {
      productName: '',
      productDescription: '',
      productPrice: '',
      categrie: '',
      producImage: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values)
      axios.post("http://localhost:8080/addproduct", values)
        .then(response => {
          console.log("Data posted successfully", response.data);
        })
        .catch(error => {
          console.error("Error posting data", error);
        });
    }
  });

  return (
    <div className="addproduct-wraper">
      <form onSubmit={formik.handleSubmit}>
        <div className="product">

          <label>product Name</label>
          <input
            type="text"
            name='productName'
            onChange={formik.handleChange}
            value={formik.values.productName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.productName && formik.errors.productName && (
            <div style={{ 'color': 'red' }}>{formik.errors.productName}</div>
          )}

          <label>product price</label>
          <input
            type="text"
            name='productPrice'
            onChange={formik.handleChange}
            value={formik.values.productPrice}
          />

          <label>product categories</label>
          <input
            type="text"
            name='categrie'
            onChange={formik.handleChange}
            value={formik.values.categrie}
          />


          <label>product image</label>
          <input
            type="file"
            name='productImage'
            accept='image/*'
            onChange={(e) => {
              // if (e.target.files && e.target.files[0]) {
                let filereader = new FileReader();

                filereader.onload = () => {
                  if (filereader.readyState === 2) {
                    console.log("Image loaded successfully");
                    console.log(filereader.result); // This will log the base64 encoded image data
                    setPreview(filereader.result)
                    formik.setFieldValue("productImage",filereader.result)
                  }
                }

                filereader.readAsDataURL(e.target.files[0]);
              // }
            }}
          // It's not typical to bind a value prop to a file input; remove this line.
          // value={formik.values.avatar}
            
          // value={formik.values.avatar}
          />


          <textarea
            rows="5"
            placeholder='product description'
            name='productDescription'
            onChange={formik.handleChange}
            value={formik.values.productDescription}
          ></textarea>

          <button type='submit'>add product</button>






        </div>
        {/* <div className="list-button">
                        <button type='submit'>add product</button>
                    </div> */}
      </form>
     
    </div>
  );
}

export default AddProduct;
