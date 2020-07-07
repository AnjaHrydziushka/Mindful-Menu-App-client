const initialState = {
    recipes: [],
  };
  
  export default function myMenuReducer(state = initialState, { type, payload }) {
    switch (type) {
      case 'add_to_menu':
        const recipeId = payload;
        return {
          ...state,
          recipes: [...state.recipes, recipeId]
        };
        case 'remove_from_menu':
          return {
            recipes: [
              ...state.recipes.filter(recipe => recipe !== payload)
            ]
          }
      default:
        return state;
    }
  }