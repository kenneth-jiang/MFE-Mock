const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/chat/latest/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "chat",
            filename: "remoteEntry.js",
            exposes: {
                "./ChatComponent": "./src/bootstrap.js",
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);