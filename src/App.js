import React from 'react';
import './App.css';
import RecipesList from './pages/RecipesList';
import { Switch, Route } from "react-router-dom";
import OneRecipe from './pages/OneRecipe';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={RecipesList} />
        <Route path="/recipes/:id" component={OneRecipe} />
      </Switch>
    </div>
  );
}

export default App;
