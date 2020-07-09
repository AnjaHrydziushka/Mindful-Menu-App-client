import axios from "axios";
import { API_URL } from '../../config/constants';

function fetchRecipesSuccess(data) {
    return {
        type: 'fetch_recipes', payload: data
    }
}

export async function fetchRecipes(dispatch, getState) {
    const response = await axios.get(`${API_URL}`)
    dispatch(fetchRecipesSuccess(response.data))
}
