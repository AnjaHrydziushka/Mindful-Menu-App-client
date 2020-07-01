import React from 'react';
import './App.css';
import RecipesList from './pages/RecipesList';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={RecipesList} />
      </Switch>
    </div>
  );
}

export default App;
