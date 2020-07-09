import React from 'react';
import RecipesList from './pages/RecipesList';
import { Switch, Route } from "react-router-dom";
import OneRecipe from './pages/OneRecipe';
import TagRecipes from './pages/TagRecipes';
import Menu from './components/Navigation/Menu';
import MyMenu from './pages/MyMenu';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/menu" component={MyMenu} />
        <Route path="/recipes/:id" component={OneRecipe} />
        <Route path="/:tag" component={TagRecipes} />
      </Switch>
       <Menu />
    </div>
  );
}

export default App;
