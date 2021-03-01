const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dev"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"],
        extensions: [".json", ".js", ".jsx"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [htmlPlugin]
};