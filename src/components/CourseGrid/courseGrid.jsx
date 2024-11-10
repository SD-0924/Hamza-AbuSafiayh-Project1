import React, { useEffect, useState } from "react";
import { CourseCard } from "../coursecard/CourseCard";


function fetchCourses(){
    return(
        fetch("https://tap-web-1.herokuapp.com/topics/list")
  .then((result) => {
    return result.json();
  })
  .catch((error) => {
    console.error("Error Fetching content", error);
  })
    )
}
export const CourseGrid = () => {
    const [courses,setCourses] = useState();
useEffect(()=>{
    fetchCourses().then(courses=> {
        setCourses(courses)
    })
}, [])
    return(
        <div className="cards-container gap-2">
        {
          courses?.map(course => {
                
                    return (
                        <CourseCard
                        key={course.id}
                        id={course.id}
                        topic={course.topic}
                        rating={course.rating}
                        name= {course.name}
                        image ={`/images/${course.image}`}
                        />
                
               );
            })
            
        }
        </div>

    )
}