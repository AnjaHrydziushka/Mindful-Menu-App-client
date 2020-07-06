import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipes/actions';
import { selectRecipesByTag } from '../store/recipes/selectors';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';

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
        <div className="RecipeList">
           <h1><strong>{tag}</strong></h1>
           {recipesByTag.map(recipe => {
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
