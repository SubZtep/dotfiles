module.exports = {
  configs: {
    recommended: {
      plugins: ["tsdoc", "subztep"],
      env: {
        browser: true,
        es6: true,
      },
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      rules: {
        "tsdoc/syntax": "warn",
        "no-constant-condition": "warn",
      },
    },
  },
}
