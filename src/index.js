#!/usr/bin/env node

var program = require('commander')
var path = require('path')
var config = require('../package.json')
var fs = require('fs')
var utils = require('./util')

program.version(config.version, '-v, --version')

program.command('init <type> <name>').action(function(type, name) {
    if (type === 'page') {
        utils.pageInit({type, name})
    }
})

program.parse(process.argv)
