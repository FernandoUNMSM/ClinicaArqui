module.exports = {
  plugins: ['macros'],
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {"runtime": "automatic"}],
    '@babel/preset-typescript'
  ],
  ignore: [".css", ".scss"]
}