# 介绍

sugar完全基于nuxt.js，基于业务做了一些定制化建设，比如vue文件sass的支持，抽象出了一些开发需要用到的公共组件。

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
