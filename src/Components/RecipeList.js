import React, {useState, useEffect} from "react";
import RecipeItem from "./RecipeItem";
import "./App.css";
import Search from "./Search";

function RecipeList({handleSubmit,handleSearch, handleClick}) {

    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setfilteredRecipes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/recipes`)
        .then((res) => res.json())
        //.then((recipes) => console.log(recipes))
        .then((recipes) => setRecipes(recipes))
    },[]);


    function handleSearch(searchTerm){
        console.log(searchTerm)
            if (searchTerm) {
                const filteredRecipes = recipes.filter((recipe) => {
                    if (recipe.name.toLowerCase().match(searchTerm.toLowerCase())) {
                        return true;
                    } else {
                        return false;
                    }
                });
                console.log(filteredRecipes)
                setRecipes(filteredRecipes);
            } else {
                setRecipes(recipes)
            }
        };

        function handleSubmit(){
            console.log(filteredRecipes);
        }

return (
    <div id="recipe-list" >
        <div>
            <Search handleSubmit={handleSubmit} handleSearch={handleSearch}/>
        </div>
        <div className="card">
        {recipes.map((recipe, id) => {
        return (<RecipeItem key={id}{...recipe} handleClick={handleClick}></RecipeItem>);
        })}
        </div>
    </div>
);
}

export default RecipeList;
