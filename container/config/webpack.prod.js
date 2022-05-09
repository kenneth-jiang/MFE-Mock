const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;
const localizationDomain = process.env.LOCALIZATION_PRODUCTION_DOMAIN;

const prodConfig = {
    mode: "production",
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/container/latest/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                header: "header@" + domain + "/header/latest/remoteEntry.js", // nested folder inside domain
                input: "input@" + domain + "/input/latest/remoteEntry.js",
                about: "about@" + domain + "/about/latest/remoteEntry.js",
                localization: "localization@" + localizationDomain + "/remoteEntry.js",
            },
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);