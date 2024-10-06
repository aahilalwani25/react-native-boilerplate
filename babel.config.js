module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins:[
    ['module:react-native-dotenv',{
      envName:'@env',
      path:'.env',
      allowUndefined: false
    }]
  ]
};
