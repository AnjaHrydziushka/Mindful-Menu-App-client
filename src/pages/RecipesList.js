import React from 'react';
import './RecipesStyle.scss';
import RecipeCard from '../components/RecipeCard';

export default function RecipesList() {

    return (
        <div className="RecipeList">
            <h1>Welcome to Mindful Menu App!</h1>
            <RecipeCard />
        </div>
    )
}
