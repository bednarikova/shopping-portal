const path = require('path');

module.exports = {
    entry: "./src/main/js/index.tsx",
    output: {
        filename: 'bundle.js',
        path: __dirname + "/src/main/resources/static/built"
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: "source-map"
};