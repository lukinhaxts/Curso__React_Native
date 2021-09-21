module.exports = {
    entry: ["@babel/polyfill", "./src/main.js"],
    mode: "development",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        static: __dirname + "/public",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
};