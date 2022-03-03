const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  // bundling mode
  mode: "development",

  // entry files
  entry: "./src/server.ts",

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  // file resolutions
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".ts", ".js"],
    modules: [
      path.resolve(__dirname + "/src"),
      path.resolve(__dirname + "/node_modules"),
      path.resolve(__dirname + "/config"),
    ],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new Dotenv()],

  target: "node",
  externals: [nodeExternals()],
};
