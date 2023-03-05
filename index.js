module.exports = {
  configs: {
    recommended: {
      plugins: ["subztep"],
      env: ["browser", "es6"],
      extends: ["eslint:recommended"],
      rules: {
        "no-constant-condition": "warn",
      },
    },
  },
}
