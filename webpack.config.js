// eslint-disable-next-line
const path = require('path');
// eslint-disable-next-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true, // Gerar os arquivos do bundle fisicamente e não em memória
    historyApiFallback: true,
  },
  externals: {
    //Scripts não incluídos no bundle
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [new CleanWebpackPlugin()],
};
