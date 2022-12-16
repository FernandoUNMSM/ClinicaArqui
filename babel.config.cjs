module.exports = {
  plugins: ['macros','@babel/transform-runtime'],
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {"runtime": "automatic"}],
    '@babel/preset-typescript'
    , "babel-preset-vite"
  ],
  ignore: [".css", ".scss"]
}