export function selectRecipes(reduxState) {
    return reduxState.recipes
}

export function selectRecipeById(id) {
    return (reduxState) => {
        return reduxState.recipes.find(recipe => recipe.id === id)
    }
}

export function selectRecipesByTag(tag) {
    return (reduxState) => {
        return reduxState.recipes.filter(recipe => recipe.tag === tag)
    }
}