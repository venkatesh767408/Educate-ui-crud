import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const API_URL = "http://localhost:8000";
  useEffect(() => {
    axios
      .get(`${API_URL}/api/course/all`)
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  const handleEdit = (id) => {
    const updatedCourse = { /* fill with updated data */ };
    axios
      .put(`${API_URL}/api/course/${id}/edit`, updatedCourse)
      .then((response) => {
        setCourses(courses.map(course => course._id === id ? response.data : course));
      })
      .catch((error) => console.error('Error editing course:', error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/api/course/${id}/delete`)
      .then(() => {
        setCourses(courses.filter(course => course._id !== id));
      })
      .catch((error) => console.error('Error deleting course:', error));
  };

  const handleView = (id) => {
    console.log("View course:", id);
   
  };

  const handleStatus = (id) => {
    console.log("Toggle status for:", id);
   
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <table className="courses-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>{course.title}</td>
                <td>{course.instructorName}</td>
                <td>{course.description}</td>
                <td>{course.status}</td>
                <td className="action-buttons">
                  <button className="action-btn view" onClick={() => handleView(course._id)}>View</button>
                  <button className="action-btn edit" onClick={() => handleEdit(course._id)}>Edit</button>
                  <button className="action-btn delete" onClick={() => handleDelete(course._id)}>Delete</button>
                  <button className="action-btn status" onClick={() => handleStatus(course._id)}>
                    {course.status ? 'Active' : 'Inactive'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No courses available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
