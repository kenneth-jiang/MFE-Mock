const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // .mjs or .js needs to be processed
                exclude: /node_modules/, // exclude node_modules to tested
                use: {
                    loader: "babel-loader", // to make babel actually work, need the presets and plugins
                    options: {
                        presets: [ "@babel/preset-react", "@babel/preset-env" ], // babel will process jsx code, transpile ES6+ code into ES5 to support legacy browser
                        plugins: [ "@babel/plugin-transform-runtime" ], // async and await syntax
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};