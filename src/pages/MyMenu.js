import React, { useEffect } from 'react';
import { addToMenu, removeFromMenu } from '../store/myMenu/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMyMenuRecipes } from '../store/myMenu/selectors';
import { useHistory } from 'react-router-dom';

export default function MyMenu() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(getMyMenuRecipes);
    const history = useHistory();

    const removeRecipe = (id) => {
        dispatch(removeFromMenu(id))
    }

    const button = {
        backgroundColor: "lightsalmon", 
        borderColor: "lightsalmon", 
        color: "black"
    }

    const link = {color: "black"}

    useEffect(() => {
        if (allRecipes.length === 0) {
            dispatch(addToMenu)
        }
    }, [dispatch])

    if (!allRecipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h3 className="text-uppercase">My Menu</h3>
            <div className="MenuContainer">
            {allRecipes.length === 0 ? (
                <div className="EmptyMenu">
                <h3 className="font-weight-lighter">You have added nothing to your menu yet</h3>
                <img src="/images/sadface.jpg" alt="Sad face" width="300" />
                </div>
            ) : (
            allRecipes.map(recipe => {
               return (
                   <div key={recipe.id} className="Recipe">
                       <div className="card mb-3">
                            <img 
                                className="card-img-top"
                                style={{ height: '240px', objectFit: 'cover' }}
                                src={recipe.image}
                                alt={`Recipe of "${recipe.title}"`}
                                onClick={() => history.push(`recipes/${recipe.id}`)}
                            />
                            <div className="card-body">
                                <a style={link} href={`/recipes/${recipe.id}`}>
                                    <h5 className="card-title"><strong>{recipe.title}</strong></h5>
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
                                    <button className="btn btn-primary" style={button} onClick={() => removeRecipe(recipe.id)}>Remove</button>
                            </div>
                       </div>  
                   </div>
               )
           }))}
          </div>
        </div>
    )
}
