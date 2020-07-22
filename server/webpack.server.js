const path = require("path");
const merge = require("webpack-merge");
const webpackNodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base.js");

const config = {
  // Inform webpack that we're building a bundle for nodeJS, rather than for the browser
  target: "node",

  // Tell webpack the root file of our server application
  entry: "./src/index.js",

  // Tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  // Tell webpack to not bundle any libraries into our output bundle on the server if that
  // library exists inside the node modules folder --> Save us a couple of seconds on building
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
