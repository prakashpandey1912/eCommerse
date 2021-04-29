import React from 'react'
import './App.css';
import HomePage from './component/homepage/homepage.jsx'
import {Route } from 'react-router-dom'
import MenuItems from './component/menuItems/menuItems';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/menu' component={MenuItems}/>
    </div>
  );
}

export default App;
