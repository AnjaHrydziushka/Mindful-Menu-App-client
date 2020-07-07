import React from 'react';
import './RecipesStyle.scss';
import RecipeCard from '../components/RecipeCard';

export default function RecipesList() {

    // const dispatch = useDispatch();
    // const recipes = useSelector(selectRecipes);

    // // console.log("Recipes", recipes)

    // useEffect(() => {
    //     // IF SELECTOR DOESN'T WORK
    //     if(recipes.length === 0){
    //         dispatch(fetchRecipes)
    //     }
    // }, [dispatch])

    // if(!recipes) return <div>Loading...</div>

    return (
        <div className="RecipeList">
            <h1>Welcome to Mindful Menu App!</h1>
            <RecipeCard />
        </div>
    )
}
