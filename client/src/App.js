import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "./Pages/Login.js"
import Register from "./Pages/Register.js"
import Home from "./Pages/Home.js";
import Header from "./Components/Header.js";
import AddBlog from "./Pages/AddBlog.js";
import AddCategory from "./Pages/AddCategory.js";
import SingleBlog from "./Pages/SingleBlog.js";
import PrivateRoute from "./Services/ProtectedRoutes.js";
import Footer from "./Components/Footer.js";
import UserAllBLogs from "./Pages/UserAllBlogs.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

        {/* protected routes  */}

        {/* PrivateRoute is parent route  */}
        <Route path="/" element={<PrivateRoute/>}>

          {/*it is default route to show when are making child routes visible */}
          <Route path="/" element={<Home/>}></Route> 
          
          <Route path="/saare-blogs" element={<UserAllBLogs/>}></Route>
          <Route path="/add-blog" element={<AddBlog/>}></Route>
          <Route path="/add-category" element={<AddCategory/>}></Route>
          <Route path="/blog/:id" element={<SingleBlog/>}></Route>
        </Route>
      </Routes>
      <Footer />
    </> 
  ) 
};

export default App;
