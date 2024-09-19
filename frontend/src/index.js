import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/sidebar';
import { Students } from './Components/students';
import { Courses } from './Components/courses';
import { Faculty } from './Components/faculty';
import { Layout } from './Components/Layout';
import {Student_Details} from './Components/Student_Details';
import {Faculty_Details} from './Components/Faculty_Details';
import { Home } from './Components/Home';
import {AdmissionForm} from './Components/AdmissionForm';

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/Students",
        element: <Students />,
      },
      {
        path: "/Courses",
        element: <Courses />,
      },
      {
        path: "/Faculty",
        element: <Faculty />,
      },
      {
        path: "Student_Details/:id",
        element: <Student_Details />,
      },
      {
        path: "Faculty_Details/:id",
        element: <Faculty_Details />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/AdmissionForm",
        element: <AdmissionForm />,
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
