const express = require('express')

const app = express()

app.use('/', (req, res, next) => {
    console.log('I am being called ;)')
    next()
})

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/slb', (req, res) => {
    res.send('SLB, o MAIOR!!!')
})

app.put('/', (req, res) => {
    res.send('This a PUT request')
})

app.delete('/', (req, res) => {
    res.send('This a DELETE request')
})

app.post('/', (req, res) => {
    res.send('This a POST request')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))