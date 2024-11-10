import React from 'react';
import { useState, useEffect } from 'react';
import {CourseCard} from '../CourseCard/CourseCard';

export const CourseGrid = ({ searchQuery }) => {
  const [courses, setCourses] = useState([]);

useEffect(() => {
    fetch("https://tap-web-1.herokuapp.com/topics/list")
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cards-container gap-2">
      {filteredCourses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
