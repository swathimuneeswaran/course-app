import React, { useEffect, useState } from "react";
import axios from "axios";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";
import MonitorIcon from "@mui/icons-material/Monitor";
import SourceIcon from "@mui/icons-material/Source";
import "../App.css";

const iconMapping = {
  LibraryBooks: { icon: LibraryBooksIcon, color: "#3498db" },
  UnfoldMore: { icon: UnfoldMoreIcon, color: "#e74c3c" },
  DatasetOutlined: { icon: DatasetOutlinedIcon, color: "#2ecc71" },
  Monitor: { icon: MonitorIcon, color: "#f39c12" },
  Source: { icon: SourceIcon, color: "#9b59b6" },
};

const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://course-app-3q5a.onrender.com/courses")
      .then((response) => {
        setCourses(response.data);
        console.log("Courses fetched:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses", error);
      });
  }, []);

  const getIconComponent = (iconName) => {
    console.log("Trying to get icon for:", iconName);
    const { icon: IconComponent, color } = iconMapping[iconName] || {};
    return IconComponent ? <IconComponent style={{ color }} /> : null;
  };

  return (
    <div className="course-table-container">
      <div className="my-course">
        <h4>My Courses</h4>
        <p className="view">View All</p>
      </div>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>Lessons Completed</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>
                <div className="course-icon-title">
                  {getIconComponent(course.icon)}
                </div>
                <div className="course-text-content">
                  <span>{course.title}</span>
                  <p className="lessons">{course.lessons}</p>
                </div>
              </td>

              <td>{course.date}</td>
              <td>{course.lesson_completed}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
