import React, { useState } from 'react';
import Course from '../components/Courses'; 
import Addcourse from '../components/Addcourse'; 
import '../App.css'


const EducateDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <div className="main-content">Dashboard Content</div>;
      case 'Courses':
        return <div className="main-content"><Course /></div>;
      case 'Add Course':
        return <div className="main-content"><Addcourse /></div>;
      case 'Users':
        return <div className="main-content">Users Content</div>;
      case 'Settings':
        return <div className="main-content">Settings Content</div>;
      case 'Logout':
        return <div className="main-content">Logout Action</div>;
      default:
        return <div className="main-content">Welcome to Educate</div>;
    }
  };

  return (
    <>
    <div className="dashboard">
      <div className="sidebar">
        <h2>EDUCATE</h2>
        <img src="./VENKATESH.jpg" alt="Educate Logo" className="logo" />
        <p className="lec-name">Instructor Name</p>
        <p className="lec-mail">abc@gmail.com</p>
        <button className="nav-button" onClick={() => setActiveComponent('Dashboard')}>
          <span className="icon">🏠</span> Dashboard
        </button>
        <button className="nav-button" onClick={() => setActiveComponent('Courses')}>
          <span className="icon">📚</span> Courses
        </button>
        <button className="nav-button" onClick={() => setActiveComponent('Add Course')}>
          <span className="icon">➕</span> Add Course
        </button>
        <button className="nav-button" onClick={() => setActiveComponent('Users')}>
          <span className="icon">👥</span> Users
        </button>
        <button className="nav-button" onClick={() => setActiveComponent('Settings')}>
          <span className="icon">⚙️</span> Settings
        </button>
        <button className="nav-button" onClick={() => setActiveComponent('Logout')}>
          <span className="icon">🚪</span> Logout
        </button>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
    </>
  );
};

export default EducateDashboard;