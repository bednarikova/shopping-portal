const path = require('path');

module.exports = {
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
