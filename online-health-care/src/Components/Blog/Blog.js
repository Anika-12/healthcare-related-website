import React ,{ useEffect, useState }from 'react';
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
    const [teams, setTeams] = useState("");
    const [allTeams, setAllTeams] = useState([]);
    const handleChange = (e) => {
      const searchText = e.target.value;
      setTeams(searchText);
      console.log(e.target.value);
    };
  
    useEffect(() => {
      fetch('./blog.JSON')
        .then((res) => res.json())
        .then((data) => setAllTeams(data));
    },);
    return (
      <div className="container all-teams">
        <div className="all-blog">
          
          <h1>Working Process
</h1>
<h1>---------</h1>
          <h4>We Provide All Aspects Of Medical Practice</h4>
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
              </div>
             
            </div>
           
            </div>
           
            ))}
            <br></br><br>
</br>             <p  className="all-blog" >If you have difficulty understanding our work process. Please contact us for better information.</p>
             </div>
          </div>
        </div>
        
              
          
      );
};

export default Blog;