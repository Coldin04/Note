---
title: EIGRP路由协议配置
order: 4
---

# EIGRP路由协议配置

内部路由  AS自治系统
动态路由选择协议
RIP EIGRP（算法： DUAL 扩散更新算法） OSPF

## 进入EIGRP配置状态

```
R1(config)# router eigrp 1                        
```

## 添加地址段
```
R1(config)# network 192.168.1.1
R1(config)# network 192.168.1.1 0.0.0.255
```

## 禁用自动总结

```
R1(config)# no auto-summary
```
