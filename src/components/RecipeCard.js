import React, { useEffect } from 'react';
import { fetchRecipes } from '../store/recipes/actions'
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipes } from '../store/recipes/selectors';
import { useHistory, Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { addToMenu } from '../store/myMenu/actions';

export default function RecipeCard() {
   
    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);
    const history = useHistory();

    const clickTheButton = (id) => {
        console.log("Button:", id)
        dispatch(addToMenu(id))
    }

    useEffect(() => {
        // IF SELECTOR DOESN'T WORK
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
                        <Card  border="success" style={{ width: '16rem', margin: '1rem' }}>
                        <Card.Img
                            style={{ height: '240px', objectFit: 'cover' }}
                            variant="top"
                            src={recipe.image}
                            onClick={() => history.push(`recipes/${recipe.id}`)}
                        />
                        <Card.Body>
                            <Link to={`/recipes/${recipe.id}`}>
                            <Card.Title><strong>{recipe.title}</strong></Card.Title>
                            </Link>
                            <Button onClick={() => clickTheButton(recipe.id)}>Add to Menu</Button>
                        </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}
