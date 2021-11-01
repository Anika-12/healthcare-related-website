import React,{ useEffect, useState } from 'react';
import "./Courses.css";
import { Link } from "react-router-dom";


const Courses = () => {
    const [teams, setTeams] = useState("");
  const [allTeams, setAllTeams] = useState([]);
  const handleChange = (e) => {
    const searchText = e.target.value;
    setTeams(searchText);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetch('./producted.JSON')
      .then((res) => res.json())
      .then((data) => setAllTeams(data));
  },);
  return (
    <div className="container all-teams">
      <div className="all">
        
        <h1>We Offer Different Services To Improve Your Health</h1>
      </div>
    
      <div className="teams">
        <div className="row">
          {allTeams?.map((pd) => (
            <div className="col-md-8">
              <div className="cart col-md-9">
                <div className="cart-details ">
                  <img className="w-240" src={pd.img} alt="" />
                </div>
                <div className="text-area">
                  <h4>{pd.strTeam}</h4>
                  <p>{pd.strAlternate}</p>
                  <p> {pd.name}</p>
                  <p> {pd.desc}</p>
                  <button className="btn btn-primary">Click Here For More Info</button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
            
        </div>
    );
};

export default Courses;