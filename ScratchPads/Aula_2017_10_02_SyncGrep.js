'use strict'

const fs = require('fs')
const [,, inputFileName, word] = process.argv

const data = fs.readFileSync(inputFileName)
data.toString().split('\n')
    .filter((line) => line.includes(word))
    .forEach((line) => console.log(line));