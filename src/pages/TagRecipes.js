import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipes/actions';
import { selectRecipesByTag } from '../store/recipes/selectors';
import { useHistory, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { addToMenu } from '../store/myMenu/actions';

export default function TagRecipes() {

    const { tag } = useParams();
    const dispatch = useDispatch();
    const recipesByTag = useSelector(selectRecipesByTag(tag));
    const history = useHistory();

    const clickTheButton = (id) => {
        dispatch(addToMenu(id))
    }

    useEffect(() => {
        if(recipesByTag.length === 0){
            dispatch(fetchRecipes)
        }
    },[dispatch])

    if (!recipesByTag) return <div>Loading...</div>

    return (
        <div className="RecipeList">
           <h1><strong>{tag}</strong></h1>
           <div className="container">
           {recipesByTag.map(recipe => {
               return (
                   <div key={recipe.id} className="Recipe">
                       <Card  border="success" style={{ width: '18rem', margin: '1rem' }}>
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
                        <Button onClick={() => clickTheButton(recipe.id)}>Add to Menu</Button>
                            </Card.Body>
                        </Card>
                   </div>
               )
           })}
           </div>
        </div>
    )
}
