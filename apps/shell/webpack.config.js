const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: { port: 3000, historyApiFallback: true },
  entry: "./src/bootstrap.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      }],

  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};
