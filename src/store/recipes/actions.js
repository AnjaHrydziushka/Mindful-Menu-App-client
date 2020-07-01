import axios from "axios";

function fetchRecipesSuccess(data) {
    return {
        type: 'fetch_recipes', payload: data
    }
}

// thunk for all recipes
export async function fetchRecipes(dispatch, getState) {
    const response = await axios.get(`http://localhost:4000/`)
    console.log("DATA?", response.data)
    dispatch(fetchRecipesSuccess(response.data))
}