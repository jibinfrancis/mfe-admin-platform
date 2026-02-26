const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: { port: 3002 },
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
    new ModuleFederationPlugin({
      name: "mfeForms",
      filename: "remoteEntry.js",
      exposes: { "./App": "./src/App" },
      remotes: {
        mfeUi: "promise new Promise(resolve => resolve(window.mfeUi))"
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-hook-form": { singleton: true, requiredVersion: false },
        zod: { singleton: true, requiredVersion: false },
        "react-dom/client": { singleton: true, requiredVersion: false },
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" })
  ]
};
