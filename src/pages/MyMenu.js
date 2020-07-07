import React, { useEffect } from 'react';
import './RecipesStyle.scss';
import { addToMenu } from '../store/myMenu/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMyMenuRecipes } from '../store/myMenu/selectors';
import { useHistory } from 'react-router-dom';

export default function MyMenu() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(getMyMenuRecipes);
    const history = useHistory();

    useEffect(() => {
        if (allRecipes.length === 0) {
            dispatch(addToMenu)
        }
    }, [dispatch])

    if (!allRecipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h3>My Menu</h3>
            {allRecipes.map(recipe => {
               return (
                   <div key={recipe.id} className="Ingredients">
                       <img
                            width="300"
                            src={recipe.image}
                            alt={`Recipe of "${recipe.title}"`}
                            onClick={() => history.push(`recipes/${recipe.id}`)}
                        />
                        <p><strong>{recipe.title}</strong></p>

                        <table className="blueTable">
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
                   </div>
               )
           })}
        </div>
    )
}
