import React, { useState } from "react";
import "./dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createCourse } from "../Api.js"; 

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructorName: "",
    instructorSummary: "",
    about: "",
    thumbnail: null,
    logo: null,
    banner: null,
    instructorPic: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      Object.keys(formData).forEach((key) => {
        fd.append(key, formData[key]);
      });

      const res = await createCourse(fd);
      console.log(res);

      if (res?.data?.status === "success") {
        toast.success("Course added successfully!");
        setFormData({
          title: "",
          description: "",
          instructorName: "",
          instructorSummary: "",
          about: "",
          thumbnail: null,
          logo: null,
          banner: null,
          instructorPic: null,
          courseVideo: null,
        });
      } else {
        toast.error(res?.message || "Failed to add course");
      }
    } catch (err) {
     
      toast.error(err.message);
    }
  };

  return (
    <div className="add-course-container">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Course Name */}
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course name"
            required
          />
        </div>

        {/* Summary */}
        <div className="form-group">
          <label>Summary</label>
          <select
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Paragraph
            </option>
            <option value="Description 1">Description 1</option>
            <option value="Description 2">Description 2</option>
          </select>
          <textarea
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter course description"
            required
          />
        </div>

        {/* Thumbnail */}
        <div className="form-group">
          <label>Thumbnail</label>
          <input
            type="file"
            name="thumbnail"
            onChange={handleChange}
            required
          />
        </div>

        {/* Logo */}
        <div className="form-group">
          <label>Logo</label>
          <input type="file" name="logo" onChange={handleChange} required />
        </div>

        {/* Banner */}
        <div className="form-group">
          <label>Banner</label>
          <input type="file" name="banner" onChange={handleChange} required />
        </div>

        {/* Instructor Name */}
        <div className="form-group">
          <label>Instructor Name</label>
          <input
            type="text"
            name="instructorName"
            value={formData.instructorName}
            onChange={handleChange}
            placeholder="Enter instructor name"
            required
          />
        </div>

        {/* Instructor Pic */}
        <div className="form-group">
          <label>Instructor Pic</label>
          <div className="profile-upload-wrapper">
            <label htmlFor="instructorPic" className="upload-circle">
              {formData.instructorPic ? (
                <img
                  src={URL.createObjectURL(formData.instructorPic)}
                  alt="Instructor"
                />
              ) : (
                <span className="plus-icon">+</span>
              )}
            </label>
            <input
              type="file"
              id="instructorPic"
              name="instructorPic"
              accept="image/*"
              onChange={handleChange}
              required
              style={{ display: "none" }}
            />
          </div>
        </div>

        {/* Instructor Summary */}
        <div className="form-group">
          <label>Instructor Summary</label>
          <textarea
            name="instructorSummary"
            value={formData.instructorSummary}
            onChange={handleChange}
            placeholder="Enter instructor summary"
            required
          />
        </div>

        {/* Video */}
        <div className="form-group">
          <label>Video</label>
          <input type="file" name="courseVideo" onChange={handleChange} required />
        </div>

        {/* About */}
        <div className="form-group">
          <label>About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Enter course duration"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Course
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCourse;
