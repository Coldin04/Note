---
title: 静态路由
order: 3
---

# 静态路由的配置

## 带送出接口的静态路由
```
Router(config)#ip route 目的网络 子网掩码 下一跳地址
```
取消配置:
```
Router(config)#no ip route 目的网络 子网掩码 下一跳地址
```
## 不带送出接口的静态路由
```
Router(config)#ip route 目的网络 子网掩码 转发接口
```

## 默认路由的配置
```
Router(config)#ip route 0.0.0.0 0.0.0.0. 下一跳地址
```

