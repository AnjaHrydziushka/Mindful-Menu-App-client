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
        dispatch(fetchRecipes)
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}
