import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './students.css'
import img1 from '../img/students-img.jpeg';
import { Link } from 'react-router-dom';


export const Students = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get('https://college-management-sys-backend.vercel.app/api/students') // Replace with your API URL
      .then((response) => {
        console.log("value==",response);
        setData(response.data);
      })
  }, []);
 
  
  return (
   <>
    <div style={{backgroundImage: `url(${img1})` , height: '90vh', width: '100wh', 
     backgroundPosition: 'bottom'}}>
   <h1 style={{textAlign: 'center', color: 'green', marginTop : '5px'}}>Our Students !</h1>
  <div className='flex'>
  { data.map((item, idx) => (
    //<Link to={`/Student_Details/${item._id}`} key={idx}>
    
    <div className="card" style={{ width: '17rem', padding: '12px',}}>
        <div className="card-body">
          <h4><b>{item.name}</b></h4>
          <p>Id: {item._id}</p>
        <Link to={`/Student_Details/${item._id}`} className="btn btn-primary">
          Go to Details
        </Link>
        </div>
      </div>
      //</Link>
   ))
  } 
   </div>
   </div>
   </> 
  )
}

export default Students;
