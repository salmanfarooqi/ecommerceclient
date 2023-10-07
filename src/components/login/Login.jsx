import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useDispatch } from 'react-redux';
import {customReducer} from '../../assets/services/Reducers/Reducer'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch()

    const loginChecking = async (e) => {
        e.preventDefault();
        console.log("login")
        
        const dataToSend = { email, password };

        try {
            const result = await axios.post("http://localhost:8080/login", dataToSend);
            console.log("token is",result.data.token)
            
            dispatch({
                type: "getUser",
                payload: JSON.stringify(result.data.token)
            })
            localStorage.setItem("user",JSON.stringify(result.data.token))

            
            if (result.data.message === "validUser") {
                console.log(result.data.message);
                console.log("token",result.data.token)
                navigate("/home");
            } else {
                setMessage(result.data.message);
            }
        } catch (error) {
            console.log(error);
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="signup-wraper">
            <form onSubmit={loginChecking} id='forms'>
                <div className="forms">
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                        />

                        <input 
                            type='password' 
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />

                        <button type="submit">Login</button>

                        <h2>
                          <div> Don't have an account?</div>
                           
                            <div className='signup'>
                                <Link to="/signup">Signup</Link>
                            </div>
                        </h2>
                        {message && <h2 className='warning'>{message}</h2>}


                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
