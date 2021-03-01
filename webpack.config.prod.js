const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "prod"),
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
            {
                test: /\.scss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader'
                  }
                ],
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