const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    resolve: {
        extensions: ['.tsx','.ts','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:"babel-loader"
                    }
                ]
            }, 
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                  loader: 'url-loader',
                },
            },
        ]
    },
    output: {
        path:path.resolve(__dirname,'..','./build'),
        filename:"bundle.js"
    },
    mode:"development",
    plugins: [
        new HTMLWebpackPlugin({
            template:path.resolve(__dirname,'..','./public/index.html')
        })
    ]
}