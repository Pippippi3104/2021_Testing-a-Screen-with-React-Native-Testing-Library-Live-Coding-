module.exports = {
  root: true,
  extends: ["handlebarlabs"],
  rules: { "import/extensions": [".js", ".jsx", ".json", ".ts", ".tsx"] },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
      },
    },
  },
};
