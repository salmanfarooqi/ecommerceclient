import React from 'react';
// import './signup.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        repassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            repassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post("http://localhost:8080/signup", values)
                .then(response => {
                    toast.success(response.data, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
                .catch(error => {
                    if (error.response && error.response.data && error.response.data.message) {
                        toast.error(error.response.data.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    } else {
                        toast.error("email already exist", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                });
        }
    });

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} />
            <div className="signup-wraper">
         
         <form onSubmit={formik.handleSubmit}> 
             <div className="forms">
                 <div className="input-box">
                     <input 
                         type="text" 
                         placeholder='Name' 
                         name='name'
                         onChange={formik.handleChange}
                         value={formik.values.name}
                         onBlur={formik.handleBlur}
                     />
                     {formik.touched.name && formik.errors.name ?
                     
                     <div style={{'color':'red'}}>{formik.errors.name}</div> : null}

                     <input 
                         type="email" 
                         placeholder='Email'
                         name='email'
                         onChange={formik.handleChange}
                         value={formik.values.email}
                         onBlur={formik.handleBlur}
                     />
                     {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                   
                     <input 
                         type='password' 
                         placeholder='password'
                         name='password'
                         onChange={formik.handleChange}
                         value={formik.values.password}
                         onBlur={formik.handleBlur}
                     />
                     {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

                     <input 
                         type='password' 
                         placeholder='Confirm Password'
                         name='repassword'
                         onChange={formik.handleChange}
                         value={formik.values.repassword}
                         onBlur={formik.handleBlur}
                     />
                     {formik.touched.repassword && formik.errors.repassword ? <div>{formik.errors.repassword}</div> : null}

                     <button type="submit" 
                  
                  
                     
                     >Sign Up</button>
                  
                     <h2>already have an account <span className='signup'><Link to="/login">login</Link></span></h2>
                 </div>
             </div>
         </form>
     </div>
     </>
    
    );
};

export default SignUp;
