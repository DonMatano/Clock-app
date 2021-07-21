// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@atomic': path.resolve(__dirname, 'src/components/atomic'),
        '@img': path.resolve(__dirname, 'img'),
      },
      // extensions: ['.js', '.ts', '.vue', '.json'],
    },
  },
};
