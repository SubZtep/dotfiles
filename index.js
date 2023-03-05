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
        "class-methods-use-this": "warn",
        "prefer-rest-params": "off",
        "spaced-comment": "warn",
        "prefer-const": "warn",
        "no-var": "off",
        "no-empty": "warn",
        "no-console": "off",
        "no-fallthrough": "off",
        "no-control-regex": "off",
        "no-case-declarations": "off",
        "no-constant-condition": "warn",
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-loss-of-precision": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: false,
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
          },
        ],
        quotes: ["warn", "double", { avoidEscape: true }],
        indent: ["off", 2, { SwitchCase: 1 }],
      },
    },
  },
}
