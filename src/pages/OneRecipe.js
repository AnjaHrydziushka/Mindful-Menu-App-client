import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../store/recipes/actions';
import { selectRecipeById } from '../store/recipes/selectors';
import './RecipesStyle.scss';
import { addToMenu } from '../store/myMenu/actions';
import { Button } from 'react-bootstrap';

export default function OneRecipe() {
    
    const { id } = useParams();
    const parsedId = parseInt(id);
    const dispatch = useDispatch();
    const [text, setText] = useState("Add to menu")

    const clickTheButton = (id) => {
        dispatch(addToMenu(id))
    }

    const button = {
        backgroundColor: "lightskyblue", 
        borderColor: "lightskyblue", 
        color: "black"
    }

    const oneRecipe = useSelector(selectRecipeById(parsedId));

    // console.log("ONE RECIPE?", oneRecipe)

    useEffect(() => {
        if(!oneRecipe){
            dispatch(fetchRecipes)
        }
    },[dispatch])

    if(!oneRecipe) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h1 className="Tags">{oneRecipe.title}</h1>

            <div className="Body">
            <img
                className="RecipeImage"
                width="300"
                src={oneRecipe.image}
                alt={`Recipe of "${oneRecipe.title}"`}
            />
            
            <h5>INGREDIENTS:</h5>
                <table className="table">
                    <tbody>
                        {oneRecipe.ingredients.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    {product.quantities.map(one => {
                                        return (
                                            <td key={one.id}>{one.amount} {product.unit}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button class="btn btn-primary" style={button} onClick={() => clickTheButton(oneRecipe.id)}>{text}</button>
            </div>
                    <h5>DESCRIPTION:</h5>
                    <p className="Text">{oneRecipe.description}</p>
                
            </div>
       
    )
}
