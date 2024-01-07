const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/server.ts',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "src/config.js", to: "./"},
            ],
        }),
    ]
};