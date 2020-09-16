module.exports = {
  env: {
    browser: true,
    es2017: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
}
