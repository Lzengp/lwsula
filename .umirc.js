import { join } from 'path';

export default {
  base: '/lwsula',
  publicPath: '/lwsula/',
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/1.x/packages/theme-default/src/style/variables.less
    '@c-primary': '#ef7304',
  },
  description: '高捷前端组件库',
  mode: 'site',
  // 单语言配置方式如下
  navs: [
    {
      title: '文档说明',
      path: '/basic',
    },
    {
      title: '默认模板',
      path: '/sula-template',
    },
    {
      title: '默认组件',
      path: '/sula-components',
    },
    {
      title: '插件说明',
      path: '/advanced',
    },
    {
      title: '配置API',
      path: '/sula-api',
    },
    {
      title: '个性组件',
      path: '/custom-components',
    },
    {
      title: 'GitLab',
      path: 'https://github.com/Lzengp/lwsula',
    },
    // {
    //   title: '我有二级导航',
    //   path: '链接是可选的',
    //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
    //   children: [
    //     { title: '第一项', path: 'https://github.com/Lzengp/lwsula' },
    //     { title: '第二项', path: '/guide' },
    //   ],
    // },
    // null, // null 值代表保留约定式生成的导航，只做增量配置
  ],
  favicon: 'https://gaojie-oss.oss-cn-shenzhen.aliyuncs.com/contract/pact/initAttachment/202303040043431321631696866668232706.png',

  plugins: [join(__dirname, './packages/umi-plugin-sula/src')],
  sula: {
    locale: {
      default: 'zh-CN',
    },
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: false,
  },
  outputPath: '.doc',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  alias: {
    '@sula/charts': join(__dirname, './packages/sula-charts/src'),
  },
  title: 'GoldJet',
  exportStatic: {},
  resolve: {
    includes: ['docs'],
  },
  // styles: [`a[title='站长统计'] { display: none; }`],
  headScripts: ['https://v1.cnzz.com/z_stat.php?id=1278602214&web_id=1278602214'],
  logo: 'https://gaojie-oss.oss-cn-shenzhen.aliyuncs.com/contract/pact/initAttachment/202303040043431321631696866668232706.png'
};
