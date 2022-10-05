import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Search from './Search';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeDetails from './RecipeDetails';


function App({handleSearch}){
  const [recipeDetails, setRecipeDetails] = useState([])

  function handleClick (){
    fetch(`http://localhost:3000/recipes/1`)
        .then((res) => res.json())
        //.then((recipeDetails) => console.log(recipeDetails))
        .then((recipeDetails) => setRecipeDetails(recipeDetails))
  }

  function handleSearch(searchTerm){
    console.log(searchTerm)
		if (searchTerm) {
			const filteredRecipes = recipeDetails.filter((recipe) => {
				if (recipe.name.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setRecipeDetails(filteredRecipes);
		} else {
			setRecipeDetails();
		}
	};
  
  return (
    <div className="App">
      <Navbar/>
      <Search handleSearch={handleSearch}/>
      <Routes>
          <Route path='/' element={<RecipeList handleClick={handleClick}/>}/>
          <Route path="/" element={<RecipeDetails />}/>
      </Routes>
      {/* <RecipeList handleClick={handleClick}/> */}
      
      <Footer></Footer>
    </div>
  )
}

export default App;