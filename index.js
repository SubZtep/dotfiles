module.exports = {
  configs: {
    recommended: {
      plugins: ["tsdoc", "subztep"],
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "tsdoc/syntax": "warn",
        "prettier/prettier": "warn",
        "no-constant-condition": "warn",
      },
    },
  },
}
