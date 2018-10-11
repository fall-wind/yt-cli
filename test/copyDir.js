const utils = require('../src/util')
const path = require('path')

const travel = utils.travel

// travel()

travel(path.join(__dirname, '../'), function(pathname) {
    console.log(pathname)
})

Object.defineProperties(a, {
    b: {
        configurable: false,
    },
    a: {
        configurable: true,
    },
})
