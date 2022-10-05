import React from "react";
import "./App.css";

const Recipe = ({ name, imageURL, description,ingredients,steps, NutritionFacts, handleClick }) =>{



	return(
		<div className="container-card">
            <div onClick={handleClick} className="card-content">
            <div className="meta_text-wrap">
                    <h1>{name}</h1>
                    <img src={imageURL} alt={name} height={400}/>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
			
            <div className="meta_text-wrap">
                <h1 className="heading">Ingredients</h1>
                <ol className="meta_ingredients-list">
				    {ingredients.map((ingredient, id)=>(
				    	<li key={id}><span>{ingredient.quantity}</span><span>{ingredient.name}</span></li>
				    ))}
			    </ol>
            </div>
            <div className="meta_text-wrap">
            <h1 className="heading">Method</h1>
                <ol className="steps-list">
                    {steps.map((step, id) => (
                        <li key={id}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="meta_text-wrap">
            <h1 className="heading">Nutrition Facts</h1>
                <ol className="nutrition-facts">
                    {NutritionFacts.map((fact, id) => (
                        <li key={id}>{fact}</li>
                    ))}
                </ol>
            </div>
		</div>
	);

}
export default Recipe;
