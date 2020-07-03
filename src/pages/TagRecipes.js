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
           HELLO
        </div>
    )
}
