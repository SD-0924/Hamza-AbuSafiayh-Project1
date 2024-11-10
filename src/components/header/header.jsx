import React from "react";


export const Header = () => {
    return (
        <header>
      <div className="flex justify-between align-center main-head">
        <h1 id="brand"><a href="/">Web Topics</a></h1>
        <div className="button-container">
          <button className="custom-button gap-1" id="darkmodebutton">
            <ion-icon name="moon-outline"></ion-icon>
            <span className="button-text">Dark Mode</span>
          </button>
          <button className="custom-button gap-1" id="favouritesbutton">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="button-text">Favourites</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center" id="second-head">
        <div id="two_trainglesone"></div>
        <div id="two_trainglestwo"></div>
        <div id="welcome">
          <h1>Welcome to the course details page!</h1>
          <p>Explore more about the course you're interested in.</p>
        </div>
      </div>
    </header>
    )
};
