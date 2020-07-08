import React, { useEffect, useState } from 'react';
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

    const button = {
        backgroundColor: "lightskyblue", 
        borderColor: "lightskyblue", 
        color: "black"
    }

    const link = {color: "black"}

    useEffect(() => {
        if(recipesByTag.length === 0){
            dispatch(fetchRecipes)
        }
    },[dispatch])

    if (!recipesByTag) return <div>Loading...</div>

    return (
        <div className="RecipeList">
           <h1 className="Tags"><strong>{tag}</strong></h1>
           <div className="container">
           {recipesByTag.map(recipe => {
               return (
                   <div key={recipe.id} className="Recipe">
                       <div class="card" style={{ width: '18rem', margin: '1rem', borderColor: "lightskyblue" }}>
                       <img class="card-img-top"
                            style={{ height: '240px', objectFit: 'cover' }}
                            variant="top"
                            src={recipe.image}
                            alt={`Recipe of "${recipe.title}"`}
                            onClick={() => history.push(`recipes/${recipe.id}`)}
                        />
                        <div class="card-body">
                            <a style={link} href={`/recipes/${recipe.id}`}>
                                <h5 class="card-title"><strong>{recipe.title}</strong></h5>
                            </a>
                        <table className="table">
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
                        <button class="btn btn-primary" style={button} onClick={() => clickTheButton(recipe.id)}>Add to menu</button>
                            </div>
                        </div>
                   </div>
               )
           })}
           </div>
        </div>
    )
}
