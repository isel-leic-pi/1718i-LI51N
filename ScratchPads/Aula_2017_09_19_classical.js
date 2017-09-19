'use strict'

function Point (x, y) {
    this.x = x
    this.y = y
}

Point.prototype.toString = function toString () {
    return '{ x = ' + this.x + '; y = ' + this.y + ' }'
}

let p1 = new Point(1,1)
console.log(p1.toString())
console.log(`p1.z = ${p1.z}`)
let p2 = new Point(2,2)
console.log(p2.toString())
console.log(`p2.z = ${p2.z}`)

Point.prototype.z = 5
console.log(`p1.z = ${p1.z}`)
console.log(`p2.z = ${p2.z}`)

p1.z = 100
console.log(`p1.z = ${p1.z}`)
console.log(`p2.z = ${p2.z}`)