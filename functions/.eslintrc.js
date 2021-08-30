module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
  },
  env: {
    es6: false,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
