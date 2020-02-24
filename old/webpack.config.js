var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    module: {
        rules: [{
            test: /\.pug$/,
            use: [
                'html-loader',
                {
                    loader: 'pug-html-loader',
                    options: {
                        pretty: true,
                        root: path.resolve(__dirname, 'src/pug')
                    },
                },
            ],
        }, {
            test: /\.(png|jpe?g|gif|svg)/,
            loader: 'file-loader',
            options: {
                name(file) {
                    if (process.env.NODE_ENV === 'development') {
                        return '[path][name].[ext]';
                    }

                    return '[path][contenthash].[ext]';
                },
            },

        },
        // {
        //     test: /\.css$/,
        //     use: [
        //         { loader: 'style-loader' },
        //         {
        //             loader: 'css-loader',
        //             options: {
        //                 modules: true
        //             }
        //         }
        //     ]
        // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/nav.pug',
            filename: 'nav.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/content.pug',
            filename: 'content.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/abnormal.pug',
            filename: 'abnormal.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/index-2.pug',
            filename: 'index-2.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/annualLeave.pug',
            filename: 'annualLeave.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/groupPermission.pug',
            filename: 'groupPermission.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/leave.pug',
            filename: 'leave.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/healthInsurance.pug',
            filename: 'healthInsurance.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pug/leaveMaintain.pug',
            filename: 'leaveMaintain.html'
        }),
    ]
};