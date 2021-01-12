import React from 'react'
import { Route } from 'react-router-dom'
import Booklist from './components/Booklist'
import Book from './components/Book'
import './App.css';


function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Booklist />
      </Route>

      <Route exact path="/book">
        <Book />
      </Route>
    </div>
  );
}

export default App;
