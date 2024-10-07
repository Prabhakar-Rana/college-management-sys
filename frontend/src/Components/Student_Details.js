import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './students.css'
import { useParams } from 'react-router-dom';
import img1 from '../img/students-img.jpeg';

export const Student_Details = () => {
  const [data, setData] = useState([]);
  
  const { id } = useParams(); // Extract the id from the URL

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get(`https://college-management-sys-backend.vercel.app/api/students/${id}`) // Replace with your API URL
      .then((response) => {
        console.log("result==",response.data);
        setData(response.data);
      })
  }, {});

  
  return (
    <>
    <div style={{backgroundImage: `url(${img1})` , height: '90vh', width: '100wh', 
     backgroundPosition: 'bottom'}}>
   <h1 style={{textAlign: 'center', color: 'green', marginTop : '5px'}}>Students Details !</h1>
    <div className='flex' style={{ display: 'flex', justifyContent: 'center' }}>
  {/* { data.map((item, idx) => ( */}
     <div className="card" style={{width: '30rem', padding: '20px', marginTop: '40px'}} >
        <div className="card-body">
          <h4><b>{data.name}</b></h4>
          <p>Id: {data._id}</p>
          <p>Age: {data.age}</p>
          <p>Courses:</p>
        {data && data.courses && (  
        <ul>
          {data.courses.map((course, courseIndex) => (
            <li key={courseIndex}>{course.name}</li> 
          ))}
        </ul>
        )}
        </div>
      </div>
   {/* ))
  }  */}
   </div>
   </div>
   </>
  )
}

export default Student_Details;
