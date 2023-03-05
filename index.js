module.exports = {
  configs: {
    recommended: {
      plugins: ["subztep"],
      env: {
        browser: true,
        es6: true,
      },
      extends: ["eslint:recommended"],
      rules: {
        "no-constant-condition": "warn",
      },
    },
  },
}
