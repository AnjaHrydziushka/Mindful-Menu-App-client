import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch } from 'react-redux';

export default function RecipesList() {

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("USE EFFECT?", fetchRecipes)
        dispatch(fetchRecipes)
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}
