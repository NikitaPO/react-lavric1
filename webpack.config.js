let path = require("path");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "index.js",
    publicPath: "dist/"
  },
  devtool: "source-map",
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
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.module\.css$/,
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
          }
        ]
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/Homework4"),
      "~com": path.resolve(__dirname, "src/Homework4/Components"),
      "~con": path.resolve(__dirname, "src/Homework4/Containers"),
      "~s": path.resolve(__dirname, "src/Homework3/Store")
    }
  },
  devServer: {
    historyApiFallback: true
  }
};

module.exports = conf;
