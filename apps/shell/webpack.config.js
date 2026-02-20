const webpack = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: { port: 3000, historyApiFallback: true },
  entry: "./src/index.ts",
  output: {
    publicPath: "auto"
  },
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
    new webpack.DefinePlugin({
      "process.env.RUNTIME_CONFIG_URL": JSON.stringify(
        process.env.RUNTIME_CONFIG_URL || "",
      ),
      "process.env.UI_COMPONENTS_URL": JSON.stringify(
        process.env.UI_COMPONENTS_URL || ""
      ),
    }),
    new ModuleFederationPlugin({
      name: "shell",

      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false }
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};
