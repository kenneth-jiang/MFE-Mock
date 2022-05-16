const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common.js");
const packageJson = require("../package.json");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "/index.html",
        },
    },
    output: {
        publicPath: "http://localhost:8080/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                header: "header@http://localhost:8081/remoteEntry.js",
                input: "input@http://localhost:8082/remoteEntry.js",
                about: "about@http://localhost:8083/remoteEntry.js",
                missionvisionvalues: "missionvisionvalues@http://localhost:8084/remoteEntry.js",
                chat: "chat@http://localhost:8085/remoteEntry.js",
                subchat: "subchat@http://localhost:8086/remoteEntry.js",
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);