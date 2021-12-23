'use strict'

const path = require('path');

module.export = {
    mode: 'none',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}