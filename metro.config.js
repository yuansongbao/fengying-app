const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 配置路径别名
config.resolver = {
  ...config.resolver,
  alias: {
    '@': './',
  },
  sourceExts: [...config.resolver.sourceExts, 'ts', 'tsx'],
};

module.exports = config;
