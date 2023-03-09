const extraBabelPlugins = [];
extraBabelPlugins.push([
  'babel-plugin-import',
  {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  },
]);

const config = {
  esm: 'babel',
  disableTypeCheck: true,
  preCommit: {
    eslint: true,
    prettier: true,
  },
  pkgs: ['goldjetsula','umi-plugin-goldjetsula'],
  extraBabelPlugins,
};

export default config;
