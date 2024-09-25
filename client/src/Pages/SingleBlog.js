import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/homeStyles.css"
 
const SingleBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog,setBlog] = useState({});

    // console.log(id);

    useEffect( () => {
        const fetchSingleBlog = async () => {
            const res = await axios.get(
                `http://localhost:9000/api/v1/get/blog/${id}`,
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                      }
                }
            );
            // console.log(res);
            setBlog(res.data);
        };
        fetchSingleBlog();
    },[id]);

    return (
        <div className="single-card_section">
            <div className="single-card">
                <h1 id="single-main-title">"{blog.title}"</h1>
                <img className="single-card_image"
                src={`http://localhost:9000/${blog.thumbnail}`}
                alt=""
                />
                <div className="single-description">
                    <p><strong>Description</strong> </p>
                    <p className="single-card_para">"{blog.description}"</p>
                </div>
                <button onClick={ ()=> navigate(-1)}>Back to Post</button>
            </div>
        </div>
    );
} 

export default SingleBlog;