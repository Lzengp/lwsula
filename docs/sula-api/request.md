---
title: 请求 API
order: 2
---

## 介绍

sula 内置 [axios](https://github.com/axios/axios) 作为请求工具，提供了诸如`表单提交`、`表单查询`以及`分页请求`等请求配置能力。

## 使用

除了配置使用 sula 的请求能力，也可以采用导入的方式，二者的配置参数和请求参数是一致的。

例如
```jsx
import React from 'react';
import { Button } from 'antd';
import { request } from 'lzengpsula';

export default () => {
  const [result, setResult] = React.useState(null);
  return (
    <div>
      {result ? <pre>{JSON.stringify(result)}</pre> : null}
      <Button
        onClick={() => {
          request({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            converter: ({ data }) => {
              return {
                ...data,
                name: 'sula',
              };
            },
          }).then((data) => {
            console.log('data: ', data);
            setResult(data);
          });
        }}
      >
        请求
      </Button>
    </div>
  );
};
```


## 配置 API（与导入使用方式一致）

### url

- 类型：`string`
- 默认值：`-`

### method

- 类型：`GET | POST | DELETE | PUT`
- 默认值：`GET`

### params

- 类型：`object`
- 默认值: `-`

### convertParams

- 类型：`((ctx, config) => params) | ConvertParamsPlugin | Array<ConvertParamsPlugin>`
- 默认值: `-`

```js
const config = {
  convertParams: (ctx) => {
    console.log('params: ', ctx.params);
    return {...ctx.params, seq: 1}
  }
}
```

### converter

- 类型：`((ctx, config) => data) | ConverterPlugin | Array<ConverterPlugin>`
- 默认值: `-`

```js
const config = {
  converter: (ctx) => {
    console.log('fetch data: ', ctx.data);
    return ctx.data;
  }
}
```

### successMessage

- 类型：`boolean | string | undefined`
- 默认值：`false`

默认是 `false` 代表不出成功提示，`true` 代表使用后端返回message，`string` 代表自定义提示信息。

## 实例 API

使用者可以基于全局配置实现统一的逻辑处理流程，也可以针对某个特定的url进行配置处理。

### bizParamsAdapter

执行顺序在 convertParams 之后。

```js
import { request } from 'lzengpsula';
request.use({
  bizParamsAdapter(params) {
    params.uuToken = '123456';
    return params;
  }
});
```

### bizRequestAdapter

执行顺序在发出请求前，是所有请求发出前的钩子中最后执行的。

```js
import { request } from 'lzengpsula';
request.use({
  bizRequestAdapter(requestConfig) {
    requestConfig.headers['X-Custom-Header'] = 'foo';
    return requestConfig;
  }
});
```


### bizDataAdapter

### bizDevErrorAdapter

### bizErrorMessageAdapter

### bizSuccessMessageAdapter

### bizNotifyHandler

### bizRedirectHandler




