const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      publicPath: "/dist",
      filename: "manifest.json",
      inject: false,
      fingerprints: false,
      name: "Budget Tracker App",
      short_name: "Budget app",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      crossorigin: "use-credentials",

      icons: [
        {
          src: path.resolve(
            __dirname,
            "public/icons/icon-512x512.png"
            ),
          size: [192, 512]
        }
      ]
    })
  ]
};

module.exports = config;
