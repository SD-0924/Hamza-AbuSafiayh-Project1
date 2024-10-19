function displayfavourites() {
  let favourites = JSON.parse(localStorage.getItem("favorites") || []);
  const cardscontainer = document.querySelector(".favcardscontainer");
  cardscontainer.innerHTML = ``;

  favourites.forEach((fav) => {
    const favcard = document.createElement("div");
    favcard.classList.add("favcard");
    const ratings = document.createElement("div");
    ratings.classList.add("ratings");
    favcard.innerHTML = `
      
              <img src="assets/images/${fav.image}" />
              <div class="favcarddetails">
                <h5>${fav.topic}</h5>
                ${getStars(fav.rating)}
              </div>
            
           `;
    favcard.setAttribute("data-id", fav.id);
    favcard.addEventListener("click", function (event) {
      let favourites = JSON.parse(localStorage.getItem("favorites") || []);

      const result = favourites.findIndex((obj)=>obj.id==fav.id);
      if(result != -1){
      favourites.splice(result,1);
      localStorage.setItem("favorites",JSON.stringify(favourites));
      favcard.remove();
      }
    });
    cardscontainer.appendChild(favcard);
  });
}

let favbutton = document.getElementById(`favouritesbutton`);
favbutton.addEventListener("click", () => {
  displayfavourites();
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

