import React, {useState, useEffect} from "react";
import RecipeItem from "./RecipeItem";
import "./App.css";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function RecipeList({handleClick}) {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/recipes`)
        .then((res) => res.json())
        //.then((recipes) => console.log(recipes))
        .then((recipes) => setRecipes(recipes))
    },[]);


return (
    <div id="recipe-list" className="card">
        {recipes.map((recipe, id) => {
        return (<RecipeItem key={id}{...recipe} handleClick={handleClick}></RecipeItem>);
        })}
    </div>
);
}

export default RecipeList;
