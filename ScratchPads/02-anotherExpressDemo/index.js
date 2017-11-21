const express = require('express')

const app = express()

function loggerDecoratorBased (req, res, next) {
    const startTime = new Date()
    console.log(`loggerDecoratorBased: startTime is ${startTime.getTime()}`)
    const oldSend = res.send
    res.send = (...args) => {
        const endTime = new Date()
        console.log(`loggerDecoratorBased: endTime is ${endTime.getTime()}`)
        console.log(`loggerDecoratorBased: took me ${endTime - startTime} ms`)
        oldSend.call(res, ...args)
    }
    console.log('loggerDecoratorBased: will call next')
    next()
    console.log(`loggerDecoratorBased: did call next at time ${new Date() - startTime} ms`)
}

function loggerEventBased (req, res, next) {
    const startTime = new Date()
    console.log(`loggerEventBased startTime is ${startTime.getTime()}`)
    res.on('finish', () => {
        const endTime = new Date()
        console.log(`loggerEventBased: endTime is ${endTime.getTime()}`)
        console.log(`loggerEventBased: took me ${endTime - startTime} ms`)
    })
    console.log('loggerEventBased: will call next')
    next()
    console.log(`loggerEventBased: did call next at time ${new Date() - startTime} ms`)
}

app.use(loggerDecoratorBased, loggerEventBased)

app.get('/', (req, res) => {
    const timeoutId = setTimeout(() => {
        res.send('GLORIOSO SLB!!!')
        clearTimeout(timeoutId)
    }, 3000)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))