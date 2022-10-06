import React, {useState, useEffect} from "react";
import Recipe from "./Recipe";
import "./App.css";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function RecipeList({handleClick}) {

    const [recipeDetails, setRecipeDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/recipes/`)
        .then((res) => res.json())
        //.then((recipeDetails) => console.log(recipeDetails))
        .then((recipeDetails) => setRecipeDetails(recipeDetails))
    },[]);


return (
<div id="recipedetails">
<h1 className="pageTitle">EXPLORE RECIPES YOU WILL LIKE</h1>
    <div  className="ui-details">
        <div className="ui_text-wrap">
                {recipeDetails.map((recipe, id) => {
            return (<Recipe key={id}{...recipe} handleClick={handleClick}></Recipe>);
            })}
        </div>
    </div>
</div>
);
}

export default RecipeList;