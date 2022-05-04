const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: "index.html",
        },
    },
    plugins: [

    ],
};

module.exports = merge(commonConfig, devConfig);