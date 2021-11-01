import React  ,{ useEffect, useState }from 'react';
import "./Doctor.css";

import { Link } from "react-router-dom";

const Doctors = () => {
    const [teams, setTeams] = useState("");
    const [allTeams, setAllTeams] = useState([]);
    const handleChange = (e) => {
      const searchText = e.target.value;
      setTeams(searchText);
      console.log(e.target.value);
    };
  
    useEffect(() => {
      fetch('./doctor.JSON')
        .then((res) => res.json())
        .then((data) => setAllTeams(data));
    },);
    return (
      <div className="container all-teams">
        <div className="all-doctor">
          
          <h1>Meet Our Team
</h1>
<h1>---------</h1>
          <h4>Certified & Experienced Doctors</h4>
          <h1>-----------------------------------------</h1>
        </div>
      
       
          <div>
          <div class="row">
            {allTeams?.map((pd) => (
               
                <div class="col-sm-4">
              < div className="card  w-18rem " >
              <img className="w-100" src={pd.img}  alt=""/>
              <div className="card-body">
                  <h1 className="card-text">{pd.name}</h1>
                  <h4 className="card-text">{pd.desc}</h4>
                  <button className="btn-btn-success">Book Appoinment</button>
              </div>
             
            </div>
           
            </div>
           
            ))}
             
             </div>
          </div>
        </div>
        
              
          
      );
};

export default Doctors;