module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["none", "tab"],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "never"],
  },
};
