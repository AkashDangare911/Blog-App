import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();

  const [input,setInput] = useState({
    title:"",
  });

  const handleCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9000/api/v1/add/category",input,
      {
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`,
        }
      });
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
    return (
        <div className="signup-main-block">
          <form onSubmit={handleCategory}>
            <h1>Add New Category</h1>
            <div className="info">
                <input className="fname" type="text"
                name="title" 
                value={input.title}
                onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
                placeholder="Category Name"/>
            </div>
            <button type="submit" href="/">Submit</button>
        </form>
      </div>
    )
}

export default AddCategory;