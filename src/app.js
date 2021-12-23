'use strict';
const React = require('react');

const Title = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'Hello, world!');
    }
})

module.exports = Title;