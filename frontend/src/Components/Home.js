import React from 'react'
import img1 from '../img/img-1.jpeg';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div style={{backgroundImage: `url(${img1})` , height: '90vh', width: '100wh', 
    backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div>
     <h1 style={{marginLeft: '35%'}}>WelCome To Our College</h1>
    </div>
    <div>
        <Link to={"/AdmissionForm"} className="btn btn-primary" style={{marginTop: '70px', marginLeft: '45%'}}>
          Take Admission !
        </Link>
    </div>
    </div>
  )
}
