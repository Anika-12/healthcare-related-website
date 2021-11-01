import React from "react";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Doctors from "../Doctors/Doctors";

import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";

import Banner from "./../Banner/Banner";


const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <MenuBar></MenuBar>
      <Courses></Courses>
      <Blog></Blog>
      <Doctors></Doctors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
