import React from "react";
import "./RecipeItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faHashtag } from "@fortawesome/free-solid-svg-icons";

const RecipeItem = ({ image, label, time, healthLabels }) => {
  return (
    <div className="recipeItem">
      <div className="recipeHeader">
        <img src={image} className="recipePic" />
      </div>
      <div className="recipeBody">
        <span className="recipeLabel">{label}</span>
        <div className="recipeText">
          <FontAwesomeIcon className="recipeLabelsIcon" icon={faHashtag} />
          <span>{healthLabels.slice(0, 4).join(", ")}</span>
        </div>
        <div className="recipeTime">
          <span className="recipeTimeText">{`${time} mins`}</span>
          <FontAwesomeIcon className="recipeTimeIcon" icon={faStopwatch} />
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
