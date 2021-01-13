import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function Book({ saved }) {
    const { id } = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5001/api/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err))
    }, [])

    const addSaved = () => {
        const found = saved.find(s => s.id === Number(id))
        console.log(found)
        if (!found)
            saved.push(book)
    }

    return (
        <div >
            <Link to='/'>Home</Link>
            {
                !book ? <div>loading</div> : null
            }
            <div className="book-container" onClick={addSaved}>
                <div>Book: {book.title}</div>
                <div>Author: {book.author}</div>
                <div>Genre: {book.genre}</div>

            </div>
        </div>
    )
}

export default Book
