import React, { useState } from 'react';
import './AdmissionForm.css';
import axios from 'axios';

export const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    courses: [{}] // Initializing courses as an array of objects
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value // Dynamically set the field based on the name attribute
    }));
  };

  // Handle change for each course
  const handleCourseChange = (index, event) => {
    const updatedCourses = formData.courses.map((course, i) =>
      i === index ? { ...course, [event.target.name]: event.target.value } : course
    );
    setFormData((prevData) => ({ ...prevData, courses: updatedCourses }));
  };

  const addCourse = () => {
    setFormData((prevData) => ({
      ...prevData,
      courses: [...prevData.courses, { _id: '' }] // Add a new course object
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    axios
      .post('http://localhost:5000/api/students', formData)
      .then((response) => {
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="name"><b>Name</b></label>
          <input 
            type="text" 
            placeholder="Enter Name" 
            name="name" 
            id="name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
          />

          <label htmlFor="age"><b>Age</b></label>
          <input 
            type="text" 
            placeholder="Enter Age" 
            name="age" 
            id="age" 
            required 
            value={formData.age} 
            onChange={handleChange} 
          />

          <label><b>Courses</b></label>
          {formData.courses.map((course, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Enter Course _id"
                name="_id"
                value={course._id}
                onChange={(event) => handleCourseChange(index, event)}
              />
            </div>
          ))}

          <button type="button" onClick={addCourse}>Add Another Course</button>

          <button type="submit" className="registerbtn">Register</button>
        </div>
      </form>
    </>
  );
}

export default AdmissionForm;
