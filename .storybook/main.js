const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     {
    //       loader: 'postcss-loader',
    //       options: {
    //         ident: 'postcss',
    //         plugins: [
    //           require('tailwindcss'),
    //           require('autoprefixer'),
    //         ],
    //       },
    //     },
    //   ],
    //   include: path.resolve(__dirname, '../'),
    // })
    config.resolve.alias = {
      ...config.resolve.alias,
      '@atomic': path.resolve(__dirname, '../src/components/atomic'),
      '@img': path.resolve(__dirname, '../img'),
    }
    return config;
  }
}
