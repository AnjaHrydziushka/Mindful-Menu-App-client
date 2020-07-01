import axios from "axios";

export async function fetchRecipes(dispatch, getState) {
    const response = await axios.get(`http://localhost:4000/`)
    console.log("DATA?", response.data)
}