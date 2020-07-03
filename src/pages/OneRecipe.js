import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipes/actions';
import { selectRecipeById } from '../store/recipes/selectors';

export default function OneRecipe() {
    
    const { id } = useParams();
    const parsedId = parseInt(id);
    const dispatch = useDispatch();

    const oneRecipe = useSelector(selectRecipeById(parsedId));

    console.log("ONE RECIPE?", oneRecipe)

    useEffect(() => {
        if(!oneRecipe){
            dispatch(fetchRecipes)
        }
    },[dispatch])

    if(!oneRecipe) return <div>Loading...</div>

    return (
        <div>
            <h1>{oneRecipe.title}</h1>
            <img 
                width="300"
                scr={oneRecipe.image}
                alt={`Recipe of "${oneRecipe.title}"`}
            />
            <h5>INGREDIENTS:</h5>
            {oneRecipe.ingredients.map(product => {
                return (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.unit}</p>
                    </div>
                )
            })}
            <h5>DESCRIPTION:</h5>
            <p>{oneRecipe.description}</p>
        </div>
    )
}
