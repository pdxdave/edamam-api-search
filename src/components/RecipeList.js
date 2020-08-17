import React from 'react'
import './Recipe.css'

const RecipeList = ({calories, image, label, ingredients, servings}) => {
    
    return (
        <div className="container">
            <div className="card">
            <div className="title">
                <h3>{label}</h3>
            </div>
            <div>
                <img src={image} alt={label} style={{ width: "100%"}}/>
            </div>
            <div className="content-container">
                <div className="content-specifics">
                    <div>
                        <p>Makes {servings} servings</p>
                    </div>
                    <div>
                        <p>Recipe: {calories.toFixed(0)} cals</p>
                    </div>
                </div>
            </div>
            <ul className="ingredient-list">
                {ingredients.map(ing => (
                    <li>{ing.text}</li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default RecipeList
