---
title: 项目文档
---

# 记录一个项目的完整历史

项目代码地址： [https://github.com/q19project/math-docs](https://github.com/q19project/math-docs)

# TODO::

* 开发API接口

# 注册npm包

包名以 @组织名/xxxx 形式
```shell
npm login 
npm publish --access public
```
进行公开发布

# 开发时常驻

使用vscode远程开发时，编辑器关闭之后进程也就消失了，为了保持常驻，我们使用pm2来启动vuepress

```shell
pm2 start --name math-docs npm -- run dev
```

当然正式上线之后可以通过webhook的方式，push即build