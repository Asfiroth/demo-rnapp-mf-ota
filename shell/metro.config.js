// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// config.resolver.extraNodeModules = {
//   react: require.resolve('react'),
//   'react-native': require.resolve('react-native'),
//   "expo": require.resolve('expo'),
//   "expo-router": require.resolve('expo-router'),
// };

// config.resolver.nodeModulesPaths = [
//   path.resolve(__dirname, '../auth-mfe/node_modules'),
//   path.resolve(__dirname, '../main-mfe/node_modules'),
//   path.resolve(__dirname, '../core-navigation/node_modules'),
//   path.resolve(__dirname, './node_modules'),
// ];

// config.watchFolders = [
//   path.resolve(__dirname, '../auth-mfe'),
//   path.resolve(__dirname, '../main-mfe'),
//   path.resolve(__dirname, '../core-navigation'),  
// ];
module.exports = config;
