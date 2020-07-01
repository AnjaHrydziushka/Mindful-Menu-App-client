import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '../store/recipes/selectors';

export default function RecipesList() {

    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);

    console.log("Recipes", recipes)

    useEffect(() => {
        dispatch(fetchRecipes)
    }, [dispatch])

    return (
        <div>
            Hello
        </div>
    )
}
