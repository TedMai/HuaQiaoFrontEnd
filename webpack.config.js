const webpack = require('webpack');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
            //{
            //    test: /\.html$/,
            //    use: [{
            //        loader: 'html-loader',
            //        options: {
            //            minimize: true
            //        }
            //    }]
            //}
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        //new HtmlWebpackPlugin({
        //    title: 'HuaQiao'
        //})
        // build optimization plugins
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-[hash].min.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            }
        }),
        //new ExtractTextPlugin({
        //    filename: 'build.min.css',
        //    allChunks: true
        //}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        })
    ],

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
};
