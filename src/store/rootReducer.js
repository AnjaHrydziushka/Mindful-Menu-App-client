import { combineReducers } from 'redux';
import recipes from './recipes/reducer';
import myMenuReducer from './myMenu/reducer';

export default combineReducers({
    recipes,
    myMenuReducer
});
