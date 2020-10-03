const withPlugins = require("next-compose-plugins");
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

const lessThemeVariablesFilePath = "./public/styles/antd-custom.less";

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, lessThemeVariablesFilePath), "utf8")
);

const lessNextConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    return config;
  }
};

const sassNextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]_[hash:base64:5]"
  }
};

module.exports = withPlugins([
  [withLess, lessNextConfig],
  [withSass, sassNextConfig]
]);
