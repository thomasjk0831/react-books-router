const express = require('express')
const server = express()
const CORS = require('cors')
const { json } = require('express')

server.use(express.json())
server.use(CORS())

const books = [
    {
        id: 0,
        title: 'The Godfather',
        director: 'Mario Puzo',
        genre: 'crime',
    },
    {
        id: 1,
        title: '1984',
        director: 'George Orwell',
        genre: "dystopian",

    },
    {
        id: 2,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        director: 'J.R.R. Tolkien',
        genre: "fantasy",
    },
    {
        id: 3,
        title: 'Of Mice and Men',
        director: 'John Steinbeck',
        genre: "social",
    },
    {
        id: 4,
        title: 'The Odyssey',
        director: 'Homer',
        genre: "mythology",
    },

];

server.get('/', (req, res) => {
    res.status(200).json({ msg: "api working" })
})

server.get('/api/books', (req, res) => {
    res.status(200).json({ data: books })
})

server.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id)
    const found = books.find(b => b.id === id)
    if (found) {
        res.status(200).json({ data: found })
    }
    else
        res.status(404).json({ msg: "error" })
})


const port = 5001
server.listen(port, () => {
    console.log(`api up at ${port}`)
})