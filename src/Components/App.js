import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import Footer from './Footer';
import RecipeDetails from './RecipeDetails';
import SignIn from './SignIn';


function App({handleSearch, recipes}){
  const [recipeDetails, setRecipeDetails] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleClick (){
    fetch(`http://localhost:3000/recipes/1`)
        .then((res) => res.json())
        .then((recipeDetails) => console.log(recipeDetails))
        .then((recipeDetails) => setRecipeDetails(recipeDetails))
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(recipeDetails.id)
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

  function handleSubmitUserInfo(e){
    e.preventDefault();
    console.log(formData);
  }
  
  return (
    <div className="App">
      <Navbar/>
      {/* <Search handleSearch={handleSearch} handleSubmit={handleSubmit}/> */}
      <Routes>
          <Route exact path="/recipe-list" element={<RecipeList handleClick={handleClick}/>}/>
          <Route exact path="/recipedetails" element={<RecipeDetails />}/>
          <Route exact path="signin-form" element={<SignIn handleSubmitUserInfo={handleSubmitUserInfo}/>}/>
      </Routes>
      {/* <RecipeList handleClick={handleClick}/> */}
      {/* <RecipeDetails /> */}
      <Footer></Footer>
    </div>
  )
}

export default App;