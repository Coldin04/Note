---
title: OSPF路由协议配置
order: 5
---

# OSPF 路由协议的配置

## 添加配置

```
R1(config)# router ospf 1
R1(config)# network 172.16.1.16 0.0.0.255 area 0
```

## 修改拓扑中路由器的路由器ID

```
R1(config)# interface loopback -
R1(config-if)# ip address 10.1.1.1 255.255.255.255
```

## 显示邻居接口

```
R1# show ip ospf neighbor
```

## 查看路由协议运行相关信息

```
R1# show ip protocols
R1# show ip route
```

 