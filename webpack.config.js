const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
    entry: {
        index: './src/index.js' // index: 으로 경로에 이름을 설정해주는 이유는 output filename에서 [name]에 이름이 들어가게끔 하기 위해 정의해주는것이다
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_bundler.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: '0.0.0.0',
        port: 8000,
        hot: true,
        disableHostCheck: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};