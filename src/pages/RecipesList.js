import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '../store/recipes/selectors';
import './RecipesStyle.scss';

export default function RecipesList() {

    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);

    console.log("Recipes", recipes)

    useEffect(() => {
        if(!recipes){
            dispatch(fetchRecipes)
        }
    }, [])

    if(!recipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h1>Welcome to Mindful Menu App!</h1>
            <div className="container">
                <p><strong>{recipes.title}</strong></p>
                <img
                    width="300"
                    src={recipes.image}
                    alt={`Recipe of "${recipes.title}"`}
                />
                
            </div>
            
        </div>
    )
}
