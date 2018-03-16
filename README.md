# 介绍

Nuxt.js 是一个基于 Vue.js 的通用应用框架。

通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。

[Nuxt.js](https://github.com/nuxt/nuxt.js)

## 环境要求

Make sure to have `node 8.0+` and `npm 5.0+` installed

## 安装

``` bash
$ git clone git@git.corp.qianka.com:wu.min/sugar.git
$ cd sugar                     
# install dependencies
$ npm install # Or yarn install
```

## 运行

### 开发环境

``` bash
# serve with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### 生产环境

``` bash
# build for production and launch the server
$ npm run build
$ npm start
```

### Generate

``` bash
# generate a static project
$ npm run generate
```

### 生产环境打包

``` bash
# build for production
$ BACKEND=http://fp02.ops.gaoshou.me:5021 npm run build
```
