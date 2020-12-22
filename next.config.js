const webpack = require('webpack');
const fs = require('fs');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
