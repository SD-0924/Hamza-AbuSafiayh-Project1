function getCourseIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const coursedId = getCourseIdFromUrl();
if (coursedId) {
  fetch(`https://tap-web-1.herokuapp.com/topics/details/${coursedId}`)
    .then((result) => result.json())
    .then((course) => {
      displaycoursedetails(course);
    });
}

function displaycoursedetails(course) {
  document.getElementById("course-category").textContent = course.category;
  document.getElementById("course-title").textContent = course.topic;
  document.querySelector("article p").textContent = course.description;

  document.querySelector(
    ".detailscard img"
  ).src = `assets/images/${course.image}`;

  document.querySelector(".cardcontent p b").textContent = `${course.topic} `;
  document.querySelector(".cardcontent p a").textContent = course.name;

  document.querySelector("#ratings").innerHTML = getStars(course.rating);

  const subtopicsList = document.querySelector(".subtopics ul");
  subtopicsList.innerHTML = "";
  course.subtopics.forEach((subtopic) => {
    const li = document.createElement("li");
    li.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>${subtopic}`;
    subtopicsList.appendChild(li);
  });
  const addtofavbutton = document.getElementById("addtofav");
  addtofavbutton.addEventListener("click", () => {
    
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const courseexists = favorites.find((fav) => fav.id === course.id);
    
    if (courseexists) {
      console.log("Course already in favorites");
    } else {
      favorites.push(course);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      console.log("Course added to favorites");
    }
  });
}

function getStars(rating) {
  const fullStar = '<ion-icon name="star"></ion-icon>';
  const halfStar = '<ion-icon name="star-half"></ion-icon>';
  const emptyStar = '<ion-icon name="star-outline"></ion-icon>';
  let starHTML = "";

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      starHTML += fullStar;
    } else if (rating > i && rating < i + 1) {
      starHTML += halfStar;
    } else {
      starHTML += emptyStar;
    }
  }
  return starHTML;
}
const darkmodebutton = document.getElementById(`darkmodebutton`);

darkmodebutton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const favouritesbar = document.querySelector(`.favouritesbar`);
const favouritesbutton = document.getElementById(`favouritesbutton`);
favouritesbutton.addEventListener("click", () => {
  if (
    favouritesbar.style.display === "none" ||
    favouritesbar.style.display === ""
  ) {
    favouritesbar.style.display = "flex";
  } else {
    favouritesbar.style.display = "none";
  }
});
