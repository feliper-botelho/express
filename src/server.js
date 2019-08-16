const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const server = express()

mongoose.connect('mongodb+srv://omini:201292@cluster0-ielrn.mongodb.net/omini?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json())
server.use(routes)

server.listen(3333)