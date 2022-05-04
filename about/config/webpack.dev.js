const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8083,
        historyApiFallback: {
            index: "/index.html",
        },
    },
    plugins: [
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

module.exports = merge(commonConfig, devConfig);