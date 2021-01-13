import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Booklist from './components/Booklist'
import Book from './components/Book'
import axios from 'axios'
import './css/styles.css';


function App() {
  const [books, setBooks] = useState([])
  const [saved, setSaved] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5001/api/books')
      .then(res => {
        console.log(res.data.books)
        setBooks(res.data.books)
      })
      .catch(err => {
        console.log("error")
      })
  }, [])


  return (
    <div className="App">
      <Route exact path="/">
        <Booklist books={books} />
      </Route>

      <Route exact path="/book/:id">
        <Book saved={saved} />
      </Route>
    </div>
  );
}

export default App;
