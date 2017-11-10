var path = require("path");
var webpack = require("webpack");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

if (typeof process.env.NODE_ENV === "undefined") {
  process.env.NODE_ENV =
    process.argv.indexOf("-p") !== -1 ? "production" : "development";
}

module.exports = {
  entry: {
    bfanger: "./src/bootstrap.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/jekyll/build"),
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.join(__dirname, "src"),
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|woff|woff2)$/,
        include: path.join(__dirname, "src"),
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    quiet: true,
    proxy: {
      "/": {
        target: "http://localhost:4000"
      }
    }
  }
};
