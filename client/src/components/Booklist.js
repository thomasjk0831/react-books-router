import React from 'react'
import { useHistory } from 'react-router-dom'

function Booklist({ books }) {
    const history = useHistory()

    const clickHandler = (id) => {
        history.push(`/book/${id}`)
    }
    return (
        <div>
            {
                books.map(b => {
                    return <div key={b.id} className="book-container" onClick={() => clickHandler(b.id)}>
                        <h2>Title: {b.title}</h2>

                    </div>
                })
            }
        </div>
    )
}

export default Booklist
