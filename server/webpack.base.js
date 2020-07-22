module.exports = {
  // Tell webpack to run babel on every file it runs through, so every code JSX and ES2015(16, 17, etc)
  // turns into equivalent ES15
  module: {
    rules: [
      {
        test: /\.js?$/, // regEx (this apply babel only in JS files)
        loader: "babel-loader",
        exclude: /node_modules/, // exlude certains directories
        options: {
          // Rules to transform our code
          presets: [
            "react",
            "stage-0", // for async code
            ["env", { target: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
