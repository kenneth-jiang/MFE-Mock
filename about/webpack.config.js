const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
    mode: "development",
    devServer: {
        port: 8083,
        historyApiFallback: {
            index: "/index.html",
        },
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-env"],
                    plugins: ["@babel/plugin-transform-runtime"],
                },
            },
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "about",
            filename: "remoteEntry.js",
            exposes: {
                "./AboutComponent": "./src/bootstrap",
            },
            shared: packageJson.dependencies,
        }),
    ],
};