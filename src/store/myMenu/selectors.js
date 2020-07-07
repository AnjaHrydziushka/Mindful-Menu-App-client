export function getMyMenuRecipes (state) {
    const myMenuId = state.myMenuReducer.recipes;
    const allRecipes = state.recipes;
    const myMenuWithRecipes = myMenuId.map(id => allRecipes.find(recipe => recipe.id === id));
    return myMenuWithRecipes;
}

