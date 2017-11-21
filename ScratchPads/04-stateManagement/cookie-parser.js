'use strict'

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

const sessionState = {
    storeName: 'Loja do Benfica',
    shoppingCart: ['Camisola','Cachecol do Tetra', 'Bíblia']
}

app.use((req, resp, next) => {
    // The property req.cookies is undefined
    console.log(req.cookies)
    next()
})

app.use(cookieParser())

app.use((req, resp, next) => {
    // The property req.cookies was injected by the cookie-parser middleware
    console.log(req.cookies)
    next()
})

app.use((req, resp) => {
    resp.cookie('sessionState', JSON.stringify(sessionState))
    resp.end()
})

const PORT = 3000
app.listen(PORT)
console.log(`Listening on port ${PORT}...`)