const express = require('express')
const server = express()
const CORS = require('cors')

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

const port = 5001
server.listen(port, () => {
    console.log(`api up at ${port}`)
})