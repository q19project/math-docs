---
title: API接口
---

# API接口

API接口使用hapi框架

## 项目初始化

采用pm2，减少修改代码之后的重复终止和启动。服务跑在8091端口。

```shell
pm2 start index.js --name hapi-api
```

