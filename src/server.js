
// Este archivo aloja la definición de nuestro servidor.

const express = require('express')

const cors = require('cors')

// Routers

const postsRouter = require('./routers/posts')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts', postsRouter)

module.exports = app

