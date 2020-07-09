import axios from "axios";

function fetchRecipesSuccess(data) {
    return {
        type: 'fetch_recipes', payload: data
    }
}

export async function fetchRecipes(dispatch, getState) {
    const response = await axios.get(`http://localhost:4000/`)
    dispatch(fetchRecipesSuccess(response.data))
}
