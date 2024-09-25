import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/registerStyles.css"

const Register = () => {
    const navigate  = useNavigate();
    const [input,setInput] = useState({
        username:"",
        email:"",
        password:""
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:9000/api/v1/user/register",input);
            alert(res.data.message);
            navigate("/login");
        } catch (error) {
            alert(error.response.data.message);
        } 
    }
    return (
        <div className="signup-main-block">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="info">
                    <input className="fname" 
                     type="text" name="username" 
                     value={input.username} 
                     onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
                     placeholder="Full name" />

                    <input type="email" name="email" 
                    value={input.email} 
                    onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
                    placeholder="Email" />

                    <input type="password" name="password" 
                    value={input.password} 
                    onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
                    placeholder="Password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;