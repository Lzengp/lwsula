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
  pkgs: ['lzengp-sula','umi-plugin-lzengp-sula'],
  extraBabelPlugins,
};

export default config;
