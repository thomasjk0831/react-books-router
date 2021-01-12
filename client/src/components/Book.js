import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function Book() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5001/api/books/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Link to='/'>Home</Link>
            <div>Book {id}</div>
        </div>
    )
}

export default Book
