import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '../store/recipes/selectors';
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { addToMenu } from '../store/myMenu/actions';

export default function RecipeCard() {
   
    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);
    const history = useHistory();

    const clickTheButton = (id) => {
        dispatch(addToMenu(id))
    }

    const button = {
        backgroundColor: "lightskyblue", 
        borderColor: "lightskyblue", 
        color: "black"
    }

    const link = {color: "black"}

    useEffect(() => {
        if(recipes.length === 0){
            dispatch(fetchRecipes)
        }
    }, [dispatch])

    if(!recipes) return <div>Loading...</div>

    return (
        <div className="container">
            {recipes.map(recipe => {
                return (
                    <div className="Recipe" key={recipe.id}>
                        <div class="card" style={{ width: '18rem', margin: '1rem', borderColor: "lightskyblue" }}>
                        <img class="card-img-top"
                            style={{ height: '240px', objectFit: 'cover' }}
                            variant="top"
                            src={recipe.image}
                            onClick={() => history.push(`recipes/${recipe.id}`)}
                        />
                        <div class="card-body">
                            <a style={link} href={`/recipes/${recipe.id}`}>
                            <h5 class="card-title"><strong>{recipe.title}</strong></h5>
                            </a>
                            <button class="btn btn-primary" style={button} onClick={() => clickTheButton(recipe.id)}>Add to Menu</button>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
