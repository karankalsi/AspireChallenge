module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          '@core/atoms': './src/core/ui/components/atoms',
          '@core/molecules': './src/core/ui/components/molecules',
          '@core/organisms': './src/core/ui/components/organisms',
          '@core/actions': './src/core/domain/actions',
          '@core/store': './src/core/domain/redux/store',
          '@core/ui-lib': './src/core/ui/lib',
          '@core/styles': './src/core/ui/styles',
          '@core/dto': './src/data/api/dto',
          '@res/images': './res/images',
          '@res/palette': './res/palette',
          '@res/typeface': './res/typeface',
        },
      },
    ],
  ],
};
