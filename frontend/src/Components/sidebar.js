import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
export const Sidebar = () => {

  return (
  <div class="topnav">
      <Link to="/Home" style={{fontWeight: 'bold'}}>Home</Link>
      <Link to="/Students">Students</Link>
      <Link to="/Courses">Courses</Link>
      <Link to="/Faculty">Faculty</Link>
  </div>
  )
}

export default Sidebar;