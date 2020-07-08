import React, { useEffect } from 'react';
import './RecipesStyle.scss';
import { addToMenu, removeFromMenu } from '../store/myMenu/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMyMenuRecipes } from '../store/myMenu/selectors';
import { useHistory, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function MyMenu() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(getMyMenuRecipes);
    const history = useHistory();

    const removeRecipe = (id) => {
        dispatch(removeFromMenu(id))
    }

    useEffect(() => {
        if (allRecipes.length === 0) {
            dispatch(addToMenu)
        }
    }, [dispatch])

    if (!allRecipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h3 class="text-uppercase">My Menu</h3>
            <div className="container">
            {allRecipes.map(recipe => {
               return (
                   <div key={recipe.id} className="Recipe">
                       <Card border="success" style={{ width: '18rem', margin: '1rem'  }}>
                        <Card.Img
                            style={{ height: '240px', objectFit: 'cover' }}
                            variant="top"
                            src={recipe.image}
                            alt={`Recipe of "${recipe.title}"`}
                            onClick={() => history.push(`recipes/${recipe.id}`)}
                        />
                        <Card.Body>
                            <Link to={`/recipes/${recipe.id}`}>
                                <Card.Title><strong>{recipe.title}</strong></Card.Title>
                            </Link>
                            <table class="table">
                            <tbody>
                                {recipe.ingredients.map(product => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            {product.quantities.map(qty => {
                                                return (
                                                    <td key={qty.id}>{qty.amount} {product.unit}</td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                        <Button onClick={() => removeRecipe(recipe.id)}>Remove</Button>
                        </Card.Body>
                       </Card>
                       
                   </div>
               )
           })}
          </div>
        </div>
    )
}
