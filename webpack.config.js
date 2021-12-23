"use strict";

const path = require("path");

module.exports = {
    mode: "production",
    entry: path.join(__dirname, "src", "index"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/static",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-core",
            },
        ],
    },
};
