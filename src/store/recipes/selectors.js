export function selectRecipes(reduxState) {
    // console.log("REDUX STATE:", reduxState.recipes)
    return reduxState.recipes
}

export function selectRecipeById(id) {
    return (reduxState) => {
        // console.log("NEW SELECTOR:", reduxState.recipes)
        return reduxState.recipes.find(recipe => recipe.id === id)
    }
}

export function selectRecipesByTag(tag) {
    return (reduxState) => {
        // console.log("NEW SELECTOR:", reduxState.recipes)
        return reduxState.recipes.find(recipe => recipe.tag === tag)
    }
}