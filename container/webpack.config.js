const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
    mode: "development",
    devServer: {
        port: 8080,
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
            name: "container",
            remotes: {
                header: "header@http://localhost:8081/remoteEntry.js",
                input: "input@http://localhost:8082/remoteEntry.js",
                about: "about@http://localhost:8083/remoteEntry.js",
            },
            shared: packageJson.dependencies,
        }),
    ],
};