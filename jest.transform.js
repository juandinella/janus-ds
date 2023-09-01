module.exports = require('babel-jest').createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-react',
  ],
})
