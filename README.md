简体中文

# sula (beta)

> Sula 当前还处于 beta 社区内测阶段，建议在对内生产项目使用，对外生产项目暂时不要使用。

## 特点

- 💻 **产品级配置**，sula 通过行为链管理实现了渲染组件与用户行为的连接，实现了行为配置，极大扩展了配置范围。
- 🌴 **语义化**，通过渲染插件与行为插件的组合，一段段配置可以语义化的描述UI呈现及用户行为动作。
- 🚀 **开发提效**，sula 提供 4 大配置模板，可以满足80%以上的中台场景，提效明显。
- 🔌 **高扩展性**，sula 通过 ctx 实现了插件与核心组件的通信，配置规则灵活且易于扩展。
- 📦 **开箱即用**，sula 内置请求插件与灵活扩展点、国际化，路由等能力，让开发者更加专注核心功能的开发。
- 📀 **自动 loading**，sula 不侵入式帮助用户完成按钮、超链接、图标点击过程的 loading 管理。


  <img src="https://img.alicdn.com/tfs/TB1l6A_HXY7gK0jSZKzXXaikpXa-2680-1412.png" width="49%"/>
  <img src="https://img.alicdn.com/tfs/TB1VWE5HkT2gK0jSZFkXXcIQFXa-2682-1412.png" width="49%"/>
</div>

## 🥗 Real Sula

[sula-real](https://github.com/umijs/sula-real) 是面向 admin 中台应用场景的 low pro code 解决方案，[预览地址](https://real.sula.now.sh/)。

## 🍙 例子

- [sula-samples](https://github.com/umijs/sula-samples) by umi
- [sula-samples-cra](https://github.com/umijs/sula-samples-cra) by create-react-app

## 📦 安装

```bash
npm i sula --save
```

## 🔨 用法

```js
import { Form, Table, CreateForm, QueryTable, StepForm, StepQueryTable } from 'goldjetsula';
```

## 📋 待完成

- [x] umi-plugin-sula
- [ ] 最终的模板设计
- [ ] 更好的 typescript 支持
- [ ] 文档