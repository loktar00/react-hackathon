var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    devtool: 'source-map',
    plugins: [
      
    ],
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.jsx$/, loader: 'jsx-loader!babel-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
