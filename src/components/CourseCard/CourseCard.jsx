import React from "react";

function getStars(rating) {
  const fullStar = <ion-icon name="star"></ion-icon>;
  const halfStar = <ion-icon name="star-half"></ion-icon>;
  const emptyStar = <ion-icon name="star-outline"></ion-icon>;

  let starElements = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      starElements.push(fullStar);
    } else if (rating > i && rating < i + 1) {
      starElements.push(halfStar);
    } else {
      starElements.push(emptyStar);
    }
  }

  return starElements;
}

export const CourseCard = (props) => {
  return (
    <div
      className="card"
      onClick={() => (window.location.href = `details.html?id=${props.id}`)}
    >
      <div className="image-container">
        <img src={props.image} alt={'image'} />
      </div>
      <div className="card-text">
        <p>{props.category}</p>
        <h3>{props.topic}</h3>
        <div id="ratings">{getStars(props.rating)}</div>
        <p>Author: {props.name}</p>
      </div>
    </div>
  );
}




