module.exports = {
  configs: {
    recommended: {
      plugins: ["subztep"],
      env: ["browser"],
      extends: ["eslint:recommended"],
      rules: {
        "no-constant-condition": "warn",
      },
    },
  },
}
