import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Booklist from './components/Booklist'
import Book from './components/Book'
import Saved from './components/Saved'
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

  const saveBook = (id) => {
    const book = books.find(b => b.id === Number(id))
    console.log(book)
    setSaved([...saved, book])
  }

  return (
    <div className="App">
      <Saved saved={saved} />
      <Route exact path="/">
        <Booklist books={books} />
      </Route>

      <Route exact path="/book/:id">
        <Book saved={saved} saveBook={saveBook} />
      </Route>
    </div>
  );
}

export default App;
