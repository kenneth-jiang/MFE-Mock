const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/about/latest/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "about",
            filename: "remoteEntry.js",
            exposes: {
                "./AboutComponent": "./src/bootstrap.js",
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);