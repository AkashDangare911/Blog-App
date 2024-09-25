import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/homeStyles.css"

const UserAllBLogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const fetchAllBlogs = async () => {
            const res = await axios.get("http://localhost:9000/api/v1/get/myblogs",
            {
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`,
                  }
            });
            setBlogs(res.data);
        };
        fetchAllBlogs();
    },[]);
    
    return (
        <div className="main-container">
            <h1 id="main-title"><strong>My Blogs</strong></h1>
            <div className="card_section">
            {
            blogs && blogs.length > 0 ? 
                blogs.map((item) => {
                    return <div className=" card_section">
                        <div className="card">
                            <Link to={`/blog/${item._id}`} style={{ textDecoration: 'none' }}>
                                <div className="card_image">
                                    <img alt="thumbnail img" src={`http://localhost:9000/${item.thumbnail}`}/>
                                </div>
                                <div className="card_panel">
                                    <div className="card_main_title">
                                        <h2>{item.title}</h2>
                                    </div>
                                    <div className="card_para">
                                        <p>{item.description.length > 150 ? item.description.substr(1,150)+"...":item.description}</p>
                                    </div>
                                    <div className="card_readmore">
                                            <Link to={`/blog/${item._id}`} 
                                                style={{textDecoration:'none'}}>
                                                <span>
                                                    Read More...
                                                </span>
                                            </Link>
                                    </div>
                                </div>
                            </Link>
                        </div> 
                    </div> 
                })
                :
                <div className="last-div">
                    <h2>No Posts to Display...</h2>
                    <h3>Add Your first blog here...</h3>
                    <Link to={"/add-blog"}>
                        <p>Click Here</p>
                    </Link>
                </div>
                }
            </div>
        </div>
    );
}

export default UserAllBLogs;