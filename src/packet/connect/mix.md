---
title: 路由协议的混用和PPP协议
order: 6
---

# 路由协议混用

## RIP 导入路由
```ssh
R1(config-router)#redistribute ospf 100 metric 15
```

## OSPF 导入路由
```ssh 
R1(config-router)#redistribute rip subnets
```

## EIGRP 导入路由
```ssh
R1(config-router)#redistribute eigrp 100 metric 15
```
CPE(config-if)#
