let path = require("path");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "index.js",
    publicPath: "dist/"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-react-jsx",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]__[sha1:hash:hex:7]"
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /^((?!\.module).)*(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~c": path.resolve(__dirname, "src/Homework3/Components"),
      "~p": path.resolve(__dirname, "src/Homework3/Pages"),
      "~s": path.resolve(__dirname, "src/Homework3/Store")
    }
  }
};

module.exports = conf;
