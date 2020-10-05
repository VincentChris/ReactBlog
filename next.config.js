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
    modifyVars: themeVariables,
  },
};

const sassNextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[folder]_[local]_[hash:base64:5]",
  },
};

module.exports = withPlugins([
  [withLess, lessNextConfig],
  [withSass, sassNextConfig],
]);
