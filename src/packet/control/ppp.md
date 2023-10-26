---
title: ppp协议的配置与管理
order: 1
---
# PPP协议的配置与管理

PPP（Point-to-Point Protocol）是一种用于在两个节点之间建立网络连接的协议。它是一种数据链路层协议，通常用于在计算机之间通过串行线路进行通信，例如使用调制解调器建立拨号连接。

## 基础配置
```ssh
Router #conf t
Router(config)#int s1/0
Router(config-if)#encapsulation ppp
```

数据压缩
```
Router(config-if)#encapsulation ppp
Router(config-if)#compress [predictor|stac]
```

多链路均衡
```
Router(config-if)#encapsulation ppp
Router(config-if)#ppp multilink
```

## 配置pap验证

开启ppp后操作
先配置一个R1
```shell
R1(config)# username R3 secret class
R1(config)# interface s1/0
R1(config-if)# ppp authentication pap
R1(config-if)# ppp pap sent-username R1 password cisco
```

然后配置R3:
```shell
R3(config)# username R1 secret cisco
R3(config)# interface s1/0
R3(config-if)# ppp authentication pap
R3(config-if)# ppp pap sent-username R3 password class
```

## 配置CHAP验证方式
### 单向认证

先在ISP端添加
```shell
R1(config)# interface s1/0
R1(config-if)# ppp authentication chap
R1(config-if)# ppp chap password coldin
R1(config-if)# ppp chap hostname ISP
```

然后在CPE端配置
```shell
R1(config)# int s1/0
R1(config-if)# ppp chap hostname R1
R1(config-if)# ppp chap password Coldin
```

### 双向认证
ISP端
```shell
ISP(config)# username CPR password 0 coldin
ISP(config)# interface s1/0
ISP(config-if)# ppp authentication chap
ISP(config-if)# ppp chap hostname ISP
```

CPE端
```shell
CPE(config)# username ISP password  0 coldin
CPE(config)# int s1/0
CPE(config-if)# ppp authentication chap 
CPE(config-if)# ppp chap hostname CPE
```

## 拓展

### 配置IP地址协商

ISP端：
```shell
ISP(config-if)# peer default ip address 202.97.224.69
ISP(config-if)# peer default ip address dhcp-pool
```

CPE端：
```shell
CPE(config-if)# ip address negotiated
```

### 配置PPP压缩

配置压缩模式
```shell
ISP(config-if)# compress stac | predictor
```

