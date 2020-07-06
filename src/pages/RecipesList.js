import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '../store/recipes/selectors';
import './RecipesStyle.scss';
import { useHistory } from "react-router-dom";

export default function RecipesList() {

    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);
    const history = useHistory();

    console.log("Recipes", recipes)

    useEffect(() => {
        // IF SELECTOR DOESN'T WORK
        if(recipes.length === 0){
            dispatch(fetchRecipes)
        }
    }, [dispatch])

    if(!recipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h1>Welcome to Mindful Menu App!</h1>
        
            <div className="container">
                {recipes.map(recipe => {
                    return (
                        <div key={recipe.id} className="Recipe">
                            <p><strong>{recipe.title}</strong></p>
                            <img
                                width="300"
                                src={recipe.image}
                                alt={`Recipe of "${recipe.title}"`}
                                onClick={() => history.push(`recipes/${recipe.id}`)}
                            />
                        </div>
                        )
                    })}
            </div>
  
        </div>
    )
}
