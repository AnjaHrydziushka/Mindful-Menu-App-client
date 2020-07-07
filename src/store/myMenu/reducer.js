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
        }
      default:
        return state;
    }
  }







     // case 'add_to_menu':
      //   const indexOfRecipes = state.recipes.findIndex(
      //     (recipe) => recipe.id === payload
      //   );
      //     if(indexOfRecipes === -1) {
      //       return {
      //         ...state,
      //         recipes: [...state.recipes, {id: payload, amount: 1}]
      //       } 
      //     } else {
      //         const newArray = [...state.recipes];
      //         newArray[indexOfRecipes] = {
      //           ...newArray[indexOfRecipes],
      //           amount: newArray[indexOfRecipes].amount + 1
      //         }
      //         return {
      //           ...state,
      //           recipes: newArray
      //         }
      //       }
  