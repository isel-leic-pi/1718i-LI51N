const express = require('express')
const session = require('express-session')

const app = express()

const sessionState = {
    storeName: 'Loja do Benfica',
    shoppingCart: ['Camisola','Cachecol do Tetra','Bíblia']
}

// Set up session module with default options
app.use(session({
    secret: 'o penta vai ser nosso',
    resave: false,
    saveUninitialized: true
}))

app.use((req, resp, next) => {
    console.log(req.session)
    next()
})

app.use((req, resp) => {
    console.log(req.session)
    req.session.sessionState = JSON.stringify(sessionState)
    resp.end()
})

const PORT = 3000
app.listen(PORT)
console.log(`Listening on port ${PORT}...`)