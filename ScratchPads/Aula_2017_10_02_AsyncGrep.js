'use strict'

const fs = require('fs')
const [,, inputFileName,word] = process.argv

fs.readFile(inputFileName, (error, data) => {
    if (error) {
        throw error
    }

    data.toString().split('\n')
        .filter((line) => line.includes(word))
        .forEach((line) => console.log(line))
})

console.log('I\'m done!')