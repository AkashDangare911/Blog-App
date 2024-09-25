import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyles.css"

const Login = () => {
    const navigate = useNavigate();
    const [input,setInput] = useState({
        email:"",
        password:"",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:9000/api/v1/user/login",input);
            
            alert(res.data.message);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",res.data.name);
            navigate("/");
        } 
        catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <div className="login-main-block">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="info">
                    <input type="email" 
                    name="email" 
                    value={input.email}
                    onChange={ (e)=>setInput({...input,[e.target.name]:e.target.value}) } 
                    placeholder="Email" />

                    <input type="password" 
                    name="password" 
                    value={input.password}
                    onChange={ (e)=>setInput({...input,[e.target.name]:e.target.value}) } 
                    placeholder="Password" />
                </div>
                <div className="login-error">
                    <p></p>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;