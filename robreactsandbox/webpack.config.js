const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

module.exports = () => {
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    // bundling mode
    mode: "development",

    // entry files
    entry: "./src/index.tsx",

    // output bundles (location)
    output: {
      publicPath: "",
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
    },

    // file resolutions
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },

    // loaders
    module: {
      rules: [
        {
          test: /\.tsx?/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
      }),
      new webpack.DefinePlugin(envKeys),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    devtool: "inline-source-map",
  };
};
