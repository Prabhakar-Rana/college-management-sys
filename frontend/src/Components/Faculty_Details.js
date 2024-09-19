import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './students.css'
import { useParams } from 'react-router-dom';
import img1 from '../img/faculty-img.jpeg';

export const Faculty_Details = () => {
  const [data, setData] = useState([]);
  
  const { id } = useParams(); // Extract the id from the URL

  useEffect(() => {
    // Fetch data from API when the component mounts
    axios
      .get(`http://localhost:5000/api/faculty/${id}`) // Replace with your API URL
      .then((response) => {
        console.log("result==",response.data);
        setData(response.data);
      })
  }, {});

  
  return (
    <>
    <div style={{backgroundImage: `url(${img1})` , height: '90vh', width: '100wh', 
     backgroundPosition: 'bottom'}}>
  <h1 style={{textAlign: 'center', color: 'green', marginTop : '5px'}}>Faculty Details !</h1>  
    <div className='flex' style={{ display: 'flex', justifyContent: 'center' }}>
  {/* { data.map((item, idx) => ( */}
     <div className="card" style={{width: '30rem', padding: '20px', marginTop: '40px', backgroundColor: '72ff72'}} >
        <div className="card-body">
          <h4><b>{data.name}</b></h4>
          <p>Id: {data._id}</p>
          <p>Department: {data.department}</p>
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

export default Faculty_Details;
