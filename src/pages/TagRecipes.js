import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipes/actions';
import { selectRecipesByTag } from '../store/recipes/selectors';

export default function TagRecipes() {

    const { tag } = useParams();
    const dispatch = useDispatch();
    const recipesByTag = useSelector(selectRecipesByTag(tag));

    console.log("Recipes by tag:", recipesByTag)

    useEffect(() => {
       dispatch(fetchRecipes)
    },[dispatch])

    return (
        <div>
            Hello!
        </div>
    )
}
