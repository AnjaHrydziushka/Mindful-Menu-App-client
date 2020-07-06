import React from 'react';
import RecipesList from './pages/RecipesList';
import { Switch, Route } from "react-router-dom";
import OneRecipe from './pages/OneRecipe';
import TagRecipes from './pages/TagRecipes';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/recipes/:id" component={OneRecipe} />
        <Route path="/:tag" component={TagRecipes} />
      </Switch>
    </div>
  );
}

export default App;
