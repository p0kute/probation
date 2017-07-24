const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const getPostcssPlugins = require('./postcss_plugins.js');
const helpers = require('./helpers');

const webpackConfig = function(options) {
    const env = options.env;

    const js_folder = options.js_folder || 'js/';
    const img_folder = options.img_folder || 'images/';
    const fonts_folder = options.fonts_folder || 'fonts/';

    const is_prod = env === 'prod' || env === 'production';

    return {
        entry: {
            polyfills: [helpers.root('src', 'js' ,'polyfills.js')],
            app: [helpers.root('src', 'js', 'index.js')]
        },
        output: {
            path: helpers.root('build'),
            publicPath: is_prod ? '' : '/',
            filename: js_folder + '[name].js'
        },
        resolve: {
            extensions: ['.js', '.json'],
            modules: [
                helpers.root('src'),
                helpers.root('node_modules')
            ]
        },
        module: {
            rules: [
                // scripts
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true }
                    }
                },
                // styles
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                // images
                {
                    test: /\.(jpg|png|gif)$|(img\.svg)$/,
                    use: {
                        loader: 'file-loader',
                        options: { name: img_folder + '[name].[ext]' }
                    }
                },
                // fonts
                {
                    test: /font\.(svg)$/i,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'image/svg+xml', name: fonts_folder + '[name].[ext]' }
                    }
                },
                {
                    test: /font\.(eot)$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/vnd.ms-fontobject', name: fonts_folder + '[name].[ext]' }
                    }
                },
                {
                    test: /font\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/font-woff', name: fonts_folder + '[name].[ext]' } 
                    },               
                },
                {
                    test: /font\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader',
                        options: { mimetype: 'application/octet-stream', name: fonts_folder + '[name].[ext]' }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: 'body',
                template: 'src/index.html'
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: getPostcssPlugins()
                }
            }),
            new CopyWebpackPlugin([
                {
                    from: helpers.root('src', 'static'),
                    to: helpers.root('build', 'static')
                }
            ])
        ]
    }
};

module.exports = webpackConfig;
