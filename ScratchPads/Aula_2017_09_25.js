
(function setItUp () {

    'use strict'

    const oldLog = console.log
    console.log = function log () {
        const timeStamp = `${new Date().toLocaleString()}: `
        const args = Array(timeStamp).concat(Array.from(arguments))
        oldLog.apply(this, args)
    }
}())

console.log('UAU', 'Isto', 'é', 'um', 'MUNDO!!!')