import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipes/actions';
import { selectRecipesByTag } from '../store/recipes/selectors';
import { useHistory } from "react-router-dom";

export default function TagRecipes() {

    const { tag } = useParams();
    const dispatch = useDispatch();
    const recipesByTag = useSelector(selectRecipesByTag(tag));
    const history = useHistory();

    console.log("Recipes by tag:", recipesByTag)

    useEffect(() => {
        if(recipesByTag.length === 0){
            dispatch(fetchRecipes)
        }
    },[dispatch])

    if (!recipesByTag) return <div>Loading...</div>

    return (
        <div>
           <h1><strong>{tag}</strong></h1>
           {recipesByTag.map(recipe => {
               return (
                   <div key={recipe.id}>
                       <img
                            width="300"
                            src={recipe.image}
                            alt={`Recipe of "${recipe.title}"`}
                            onClick={() => history.push(`recipes/${recipe.id}`)}
                        />
                        <p><strong>{recipe.title}</strong></p>
                        
                        <ul>
                            {recipe.ingredients.map(one => {
                                return (
                                    <li key={one.id}>{one.name}</li>
                                )
                            })}
                        </ul>
                   </div>
               )
           })}
        </div>
    )
}
