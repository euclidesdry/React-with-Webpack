'use strict'

const path = require('path');

module.export = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}