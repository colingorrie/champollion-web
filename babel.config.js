module.exports = {
  presets: ['@babel/typescript', '@vue/app'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'babel-plugin-syntax-jsx',
    'babel-plugin-jsx-v-model',
  ],
};
