import { combineReducers } from 'redux';
import recipes from './recipes/reducer';
import myMenuReducer from './myMenu/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
    recipes,
    myMenuReducer,
    authReducer
});
