import React, { useEffect } from 'react';
import './RecipesStyle.scss';
import { addToMenu } from '../store/myMenu/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function MyMenu() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(addToMenu)
    }, [dispatch])

    return (
        <div className="RecipeList">
            My Menu
        </div>
    )
}
