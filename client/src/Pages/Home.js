import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/homeStyles.css"

const Home = () => {
    const [blogs,setBlogs] = useState([]);

    // running for the first time when page loads
    useEffect(()=>{
        const fetchAllBlogs = async () => {
            const res = await axios.get("http://localhost:9000/api/v1/get/saareblogs",
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
            <h1 id="main-title"><strong>Latest Posts</strong></h1>
            <div className="card_section">
            {
            blogs && blogs.length > 0 ? 
                blogs.map((item) => 
                {
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
                                            style={{ textDecoration: 'none' }}>
                                                <span>
                                                    Read More...
                                                </span>
                                            </Link>
                                    </div>
                                </div>
                            </Link>
                        </div> 
                    </div> 
                }   )
                :
                <div>
                    <h2>No Posts yet...</h2>
                </div>
                }
        </div>
        </div>
    );
}

export default Home;