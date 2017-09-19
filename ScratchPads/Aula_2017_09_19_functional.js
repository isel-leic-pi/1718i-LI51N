'use strict'

function Point (x, y) {
    let result = {
        'toString': function toString () {
            return '{ x = ' + x + '; y = ' + y + ' }'
        }
    }
    return result
}

let p1 = Point(1,1)
console.log(p1.toString())

p1.x = 4
console.log(p1.toString())
console.log(p1.x)