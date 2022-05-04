const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",

    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                header: "header@" + domain + "/header/remoteEntry.js", // nested folder inside domain
                input: "input@" + domain + "/input/remoteEntry.js",
                about: "about@" + domain + "/about/remoteEntry.js",
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);