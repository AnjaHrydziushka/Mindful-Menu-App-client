import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch } from 'react-redux';

export default function RecipesList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipes)
    }, [dispatch])

    return (
        <div>
            Hello
        </div>
    )
}
