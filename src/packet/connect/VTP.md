---
title: VTP和STP的基本配置
order: 2
---
# VTP

## 1. VTP域组成

### 1. server模式：
1. 域名称
2. 域密码
3. 域模式
### 2. client模式：
1. 域名称
2. 域密码
3. 域模式
### 3. transparent模式 （透明模式）
1. 域名称
2. 域密码
3. 域模式


## 一、配置server模式

### （1）配置交换机模式
```shell
Switch(config)#vtp domain system

Switch(config)#vtp password cisco

Switch(config)#vtp mode server
```


### （2）创建vlan信息
```shell
Switch#vlan database

Switch(vlan)#vlan 10

Switch(vlan)#vlan 20

Switch(vlan)#vlan 30

Switch(vlan)#vlan 40
```


### （3）配置trunk链路
```shell
Switch(config)#interface range f0/1-2

Switch(config-if-range)#switchport mode trunk

Switch(config-if-range)#switchport trunk allowed vlan all
```



## 二、配置client模式
```shell
Switch(config)#vtp domain system

Switch(config)#vtp password cisco

Switch(config)#vtp mode client
```

# STP协议

在一个复杂的网络环境中，由于冗余备份的需要，网络设计者都倾向于在设备之间部署多条物理链路，其中一条作主用链路，其他链路作备份，偶然或必然中都会导致环路产生。环路会产生广播风暴，最终导致整个网络资源被耗尽，网络瘫痪不可用。环路还会引起MAC地址表震荡导致MAC地址表项被破坏。

STP技术可以有效的解决环路问题，将彼此交互信息发现网络中的环路，将部分冗余链路强制为阻塞状态，其他链路处于转发状态。最终将环形网络结构修剪成无环路的树形网络结构，从而防止报文在环形网络中不断增生和无限循环，避免设备由于重复接收相同的报文造成处理能力下降。

## STP vs RSTP vs MSTP

STP包含两种含义：

-   狭义的STP是指IEEE 802.1D中定义的STP协议。
-   广义的STP包括IEEE 802.1D中定义的STP、IEEE 802.1W中定义的快速生成树协议RSTP（Rapid Spanning Tree Protocol）和IEEE 802.1S中定义的多生成树协议MSTP（Multiple Spanning Tree Protocol）。

目前，生成树协议支持如下：

-   STP是基础的数据链路层的管理协议，用于二层网络的环路检测和预防。但是，STP拓扑收敛速度慢。
-   RSTP在STP基础上进行了改进，实现了网络拓扑快速收敛。但RSTP和STP还存在同一个缺陷：局域网内所有的[VLAN](https://info.support.huawei.com/info-finder/encyclopedia/zh/VLAN.html "VLAN")共享一棵生成树，不能按VLAN阻塞冗余链路，所有VLAN的报文都沿着一棵生成树进行转发。
-   MSTP通过设置VLAN映射表（即VLAN和生成树实例的对应关系表），把VLAN和生成树实例联系起来。同时它把一个交换网络划分成多个域，每个域内形成多棵生成树实例，生成树实例之间彼此独立。MSTP提供了数据转发的多个冗余路径，在数据转发过程中实现VLAN数据的负载均衡。

## 设置交换机优先级参数

设置优先参数，以方便交换机选取根交换机。
任选其一
```shell
Switch(config)#spanning-tree vlan 1 priority 8192  
Switch(config)#spanning-tree vlan 1 root primary
```

## 判断根交换机：

### 1. 通过`spanning-tree`判断
```shell
Switch#show spanning-tree

VLAN0001

Spanning tree enabled protocol ieee

Root ID Priority 8193

Address 00D0.FFC5.E230

Cost 19

Port 3(FastEthernet0/3)

Hello Time 2 sec Max Age 20 sec Forward Delay 15 sec

  

Bridge ID Priority 32769 (priority 32768 sys-id-ext 1)

Address 0001.96BE.0DBD

Hello Time 2 sec Max Age 20 sec Forward Delay 15 sec

Aging Time 20

  

Interface Role Sts Cost Prio.Nbr Type

---------------- ---- --- --------- -------- --------------------------------

Fa0/1 Desg FWD 19 128.1 P2p

Fa0/3 Root FWD 19 128.3 P2p

Fa0/2 Desg FWD 19 128.2 P2p

Fa0/24 Desg FWD 19 128.24 P2p
```

### 2. 通过端口联通状态判断

1. 先根据mac端口判断优先级
2. 根据`cost`值判断优先级
3. 选取出指定端口
4. 选取出非指定端口
