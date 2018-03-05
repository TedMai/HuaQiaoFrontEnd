const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        home: './src/main.ts'
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // }
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: path.resolve('src', 'tsconfig.app.json')}
                    }
                    , 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                exclude: path.resolve('src', 'app'),
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap'})
            },
            {
                test: /\.css$/,
                include: path.resolve('src', 'app'),
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'HuaQiao',
            // template: path.resolve('src', 'index.html')
        })
        // build optimization plugins
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'vendor-[hash].min.js'
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: false
        //     }
        // }),
        //new ExtractTextPlugin({
        //    filename: 'build.min.css',
        //    allChunks: true
        //}),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"',
        // })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 3,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    }
};
