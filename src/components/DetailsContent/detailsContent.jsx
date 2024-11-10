import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../details.css';
import './detailsCotnent.css'
export const DetailsContent = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.error("Error fetching course details:", error));
    }, [id]);

    if (!course) return <div>Loading...</div>;

    const getStars = (rating) => {
        const stars = Array(5).fill('star-outline');
        for (let i = 0; i < Math.floor(rating); i++) stars[i] = 'star';
        if (rating % 1 >= 0.5) stars[Math.floor(rating)] = 'star-half';
        return stars.map((name, idx) => <ion-icon key={idx} name={name}></ion-icon>);
    };
    return (
    <>
    <div className='main'>
    <div class="black-container justify-center">
        <div class="container40">
          <article>
            <h3 id="course-category">{course.category}</h3>
            <h1 id="course-title">{course.topic}</h1>
            <div id="ratings">{getStars(course.rating)}</div>
            <p id="course-description">{course.description}</p>
          </article>
        </div>

        <div class="detailscard">
          <img id="course-image" alt="Course Image" src={`/images/${course.image}`}/>
          <div class="cardcontent">
            <p>
              <b id="course-author">{course.topic}</b> by <a id="author-link" href="#">{course.name}</a>
            </p>
            <div class="insidecardcontent">
              <p>Interested in this topic?</p>
              <button class="favbutton" id="addtofav">
                <span>Add to Favourites </span>
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <p id="unlimitedcredits">Unlimited Credits</p>
            </div>
          </div>
        </div>
      </div>

      <div class="fathercontainer justify-center flex">
        <div class="container40">
          <div class="subtopics">
            <h2>Sub Topics</h2>
            <ul id="subtopics-list">{course.subtopics.map((subtopic, index) => (
            <li key={index}>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              {subtopic}
            </li>
          ))}</ul>
          </div>
        </div>
        <div class="helper"></div>
      </div>
      </div>
      </>
    )
}