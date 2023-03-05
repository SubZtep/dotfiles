module.exports = {
  configs: {
    recommended: {
      plugins: ["subztep"],
      env: {
        browser: true,
        es6: true,
      },
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      rules: {
        "no-constant-condition": "warn",
      },
    },
  },
}
