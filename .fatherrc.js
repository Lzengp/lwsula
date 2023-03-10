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
  pkgs: ['lzengpsula','umi-plugin-lzengpsula'],
  extraBabelPlugins,
};

export default config;
