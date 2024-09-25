import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/headerStyles.css"

const Header = () => {
    const navigate  = useNavigate();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const handleLogout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        alert("Logout successfully");
        navigate("/login");
    }
    
    return (
        <ul className="ul">
            <div className="nav-links">
                <li className="upward ">
                    <Link id="app-name" to="/">TECH-BLOG</Link>
                </li>
            </div>


            <div className="nav-links">
                <li className="upward">
                    <Link to="/saare-blogs">My Blogs</Link>
                </li>
                <li className="upward">
                    <Link to="/add-blog">Add Blog</Link>
                </li>
                <li className="upward">
                    <Link to="/add-category">Add Category</Link>
                </li>
                <li className="upward">
                    <Link to="#">Contact Us</Link>
                </li>
            </div>

            <div >
                {   token && token !== null ? 
                    (<div className="last-btns">
                        <button className="welcome-btn">Welcome : {username.length>15 ? username.substring(0,15)+"...":username}
                        </button>
                        <button className="logout-btn" onClick={handleLogout}> Logout</button>
                    </div>)
                    :
                    (<div className="nav-links">
                    <li className="upward">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="upward">
                        <Link to="/register">Register</Link>
                    </li>
                    </div>)
                }
            </div>
        </ul>
    );
}

export default Header;