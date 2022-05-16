const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/subchat/latest/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "subchat",
            filename: "remoteEntry.js",
            exposes: {
                "./SubChatComponent": "./src/bootstrap.js",
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);