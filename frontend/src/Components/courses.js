import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './students.css'
import img1 from '../img/courses-img.jpeg';


export const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get('http://localhost:5000/api/courses') // Replace with your API URL
      .then((response) => {
        console.log("value==",response);
        setData(response.data);
      })
  }, []);
  
  return (
  <>
  <div style={{backgroundImage: `url(${img1})` , height: '90vh', width: '100wh', 
     backgroundPosition: 'bottom'}}>
  <div className='flex'>
  { data.map((item, idx) => (
     <div className="card" style={{width: '13rem', padding: '12px'}}>
        <div className="card-body">
          <p>course id : </p>
          <p>{item._id}</p>
          <h4><b>{item.name}</b></h4>
        </div>
      </div>
   ))
  } 
   </div>
   </div>
   </>  
  )
}

export default Courses;
