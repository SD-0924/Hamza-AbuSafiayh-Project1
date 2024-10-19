fetch("https://tap-web-1.herokuapp.com/topics/list")
  .then((result) => {
    return result.json();
  })
  .then((Courses) => {
    displayCourses(Courses);
  })
  .catch((error) => {
    console.error("Error Fetching content", error);
  });

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
function displayCourses(Courses) {
  const container = document.querySelector(".cards-container");

  for (const course of Courses) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("card");
    courseCard.innerHTML = `
    <div class="image-container">
              <img src="assets/images/${course.image}" alt="${
      course.topic
    } image" />
    </div>
              <div class="card-text">
                  <p>${course.category}</p>
                  <h3>${course.topic}</h3>
                  <div id="ratings">
                      ${getStars(
                        course.rating
                      )} <!-- Call a helper function to display stars -->
                  </div>
                  <p>Author: ${course.name}</p>
              </div>
          `;
    courseCard.addEventListener("click", () => {
      window.location.href = `details.html?id=${course.id}`;
    });
    container.appendChild(courseCard);
  }
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


