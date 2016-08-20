var path = require('path');
module.exports = {
    entry: 'TODO',
    output: {
          path: __dirname,
          filename: 'TODO.js'
        },
    module: {
            loaders: [
                { test: path.join(__dirname, 'TODO'),
                  loader: 'babel-loader' }
            ]
    }
};
