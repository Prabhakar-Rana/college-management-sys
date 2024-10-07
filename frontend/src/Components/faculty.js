import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './students.css'
import img1 from '../img/faculty-img.jpeg';


export const Faculty = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get('college-management-sys-backend.vercel.app
/api/faculty') // Replace with your API URL
      .then((response) => {
        console.log("value==",response);
        setData(response.data);
      })
  }, []);
  
  return (
    <>
   <div style={{backgroundImage: `url(${img1})` , height: '90vh', width: '100wh', 
     backgroundPosition: 'bottom'}}>
  <h1 style={{textAlign: 'center', color: 'green', marginTop : '5px'}}>Our Faculty !</h1>  
  <div className='flex'>
  { data.map((item, idx) => (
     <div className="card" style={{width: '17rem', padding: '12px'}}>
        <div className="card-body">
          <h4><b>{item.name}</b></h4>
        <Link to={`/Faculty_Details/${item._id}`} className="btn btn-primary">
          Go to Details
        </Link>
        </div>
      </div>
   ))
  } 
   </div>
   </div>  
   </>
  )
}

export default Faculty;
