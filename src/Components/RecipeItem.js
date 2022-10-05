import React from "react";
import "./App.css";

const RecipeItem = ({ name, imageURL, handleClick }) =>{


	return(
		<div className="ui-card">
            <div onClick={handleClick} className="food_text-wrap">
                <img src={imageURL} alt={name}/>
                <h3>{name}</h3>
            </div>
		</div>
	);

}
export default RecipeItem;