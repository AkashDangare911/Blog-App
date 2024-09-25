import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/addBlogStyles.css"

const AddBlog = () => {
  const navigate = useNavigate();

  const [input,setInput] = useState({
    title:"",
    description:"",
    category:"",
  });

  const [categories,setCategories] = useState([]);
  const [file,setFile] = useState([]);

  // only run at first render 
  useEffect(()=>{
      const fetchAllCategories = async () => 
      {
        const res = await axios.get(
          "http://localhost:9000/api/v1/get/categories",
          {
            headers:{
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCategories(res.data);
      };
      fetchAllCategories();
    },[]);

    const formdata = new FormData();
    formdata.append("title",input.title);
    formdata.append("category",input.category);
    formdata.append("description",input.description);
    formdata.append("thumbnail",file);
     
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:9000/api/v1/add/blog",formdata,
        {
          headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`,
          }
        });
        alert(res.data.message);
        navigate("/");  
      } 
      catch (error) {
        alert(error.response.data.message);
      }
    }
    
    return (
        <div className="signup-main-block">
        <form onSubmit={handleSubmit}>
          <h1>Add New Blog</h1>
          <div className="info">
            <input className="fname" type="text" name="title"
            value={input.title}
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} 
            placeholder="Blog Title"/>

            <label htmlFor="cat">
              Category : &nbsp; 
            </label>
            <select id="cat" name="category" defaultValue={"akash"}
             onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} >
              <option>Select Category</option>
              {categories && categories.map((item) => {
                return <option value={item._id}> {item.title} </option>
              })};
            </select>
          </div>

          <div>
            <label htmlFor="blogTextarea">
                Description
            </label>

            <textarea rows="4" id="blogTextarea" name="description" 
            value={input.description}
            onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} 
            placeholder="Add Your Blog Here...">
            </textarea>

            <p>Add Thumbnail</p>
            <input name="thumbnail" className="thumbnail"
            type="file"
            onChange={(e) => setFile(e.target.files[0])} 
            />

          </div>

          <button type="submit" href="/">Submit</button>

        </form>
      </div>
    );
} 

export default AddBlog;