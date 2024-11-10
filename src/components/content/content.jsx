import React from "react";
import { CourseGrid } from "../CourseGrid/courseGrid"
import "./content.css"
import "../../variables.css"


export const Content = () => {
  return (
   
    <div className="content">
      <div className="container">
        <div className="search-container">
          <div id="searchbar" className="flex align-center">
            <ion-icon name="search"></ion-icon>
            <input type="text" placeholder="Search the website..." />
          </div>
          <div className="flex filterbuttons">
            <div className="dropdownbuttons justify-center">
              <span>Sort by:</span>
              <select>
                <option>Default</option>
              </select>
            </div>
            <div className="dropdownbuttons justify-center">
              <span>Filter by:</span>
              <select>
                <option>Deafult</option>
              </select>
            </div>
          </div>
        </div>

        <h2 id="h2-main">"24" Web Topics Found</h2>
        <CourseGrid />



      </div>
    </div>
  )
}