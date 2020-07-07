import React, { useEffect } from 'react';
import './RecipesStyle.scss';
import { addToMenu } from '../store/myMenu/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMyMenuRecipes } from '../store/myMenu/selectors';

export default function MyMenu() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(getMyMenuRecipes);

    console.log("All recipes:", allRecipes)

    useEffect(() => {
        if (allRecipes.length === 0) {
            dispatch(addToMenu)
        }
    }, [dispatch])

    if (!allRecipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            My Menu
        </div>
    )
}
