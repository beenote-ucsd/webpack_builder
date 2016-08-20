var path = require('path');
module.exports = {
    entry: {
        runtime: "./#TODO#",
        backgroundRuntime: "./#TODO#",
    },
    output: {
          path: path.join(__dirname, "#TODO#"),
          filename: "[name].js"
        },
    module: {
            loaders: [{
            test: /\.js?$/,
            exclude: [/node_modules/, /__tests__/],
            loaders: ['babel?presets[]=es2015,presets[]=stage-1,presets[]=react']
        }, {
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, 
        {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.(woff|woff2)$/,
            loader: "url?prefix=font/&limit=5000"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }, {
            test: /\.gif/,
            loader: "url-loader?limit=10000&mimetype=image/gif"
        }, {
            test: /\.jpg/,
            loader: "url-loader?limit=10000&mimetype=image/jpg"
        }, {
            test: /\.png/,
            loader: "url-loader?limit=10000&mimetype=image/png"
        }]
    },
    node: {
    __dirname: true
  }
};
