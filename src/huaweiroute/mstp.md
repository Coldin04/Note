---
title: mstp的介绍和简单配置
order: 2
tag:
  - mstp
  - stp
  - huawei
  - ensp
---

## STP(生成树协议)
根据IEEE协会制定的802.1D标准建立的，用于在局域网中消除数据链路层物理环路的协议。

STP包含了两个含义，狭义的STP是指IEEE 802.1D中定义的STP协议，广义的STP是指包括IEEE 802.1D定义的STP协议以及各种在它的基础上经过改进的生成树协议。

## STP的基本原理
STP通过在设备之间传递BPDU来确定网络的拓扑结构。配置消息中包含了足够的信息来保证设备完成生成树的计算过程，其中包含的几个重要信息如下：
| 名称 | 介绍 |
| -- | -- |
| 根桥ID | 由根桥的优先级和MAC地址组成 |
| 根路径开销 | 到根桥的最短路径开销 |
| 指定桥ID | 由指定桥的优先级和MAC地址组成 |
| 指定端口ID | 由指定端口的优先级和端口名称组成 |
| 配置消息在网络中传播的生存期 | Message Age |
| 配置消息在设备中能够保存的最大生存期 | Max Age |
| 配置消息发送的周期 | Hello Time|
| 端口状态迁移的延时 | Forward Delay |

## MSTP 

STP不能快速迁移，即使是在点对点链路或边缘端口（边缘端口指的是该端口直接与用户终端相连，而没有连接到其它设备或共享网段上），也必须等待2倍的Forward Delay的时间延迟，端口才能迁移到转发状态。

RSTP（Rapid Spanning Tree Protocol，快速生成树协议）是STP协议的优化版。其“快速”体现在，当一个端口被选为根端口和指定端口后，其进入转发状态的延时在某种条件下大大缩短，从而缩短了网络最终达到拓扑稳定所需要的时间。

MSTP（Multiple Spanning Tree Protocol，多生成树协议）可以弥补STP和RSTP的缺陷，它既可以快速收敛，也能使不同VLAN的流量沿各自的路径转发，从而为冗余链路提供了更好的负载分担机制。

## MSTP的特点

1. MSTP设置VLAN映射表（即VLAN和生成树的对应关系表），把VLAN和生成树联系起来。通过增加“实例”（将多个VLAN整合到一个集合中）这个概念，将多个VLAN捆绑到一个实例中，以节省通信开销和资源占用率。
2. MSTP把一个交换网络划分成多个域，每个域内形成多棵生成树，生成树之间彼此独立。
3. MSTP将环路网络修剪成为一个无环的树型网络，避免报文在环路网络中的增生和无限循环，同时还提供了数据转发的多个冗余路径，在数据转发过程中实现VLAN数据的负载分担。
4. MSTP兼容STP和RSTP。


##  MSTP 配置案例(以ensp为例)

![mstp拓扑图](https://s2.loli.net/2024/01/03/YR3pnAUfg2Hhbvl.png)

在配置好基础的vlan和端口类型后，以`sw1`为例，进行如下配置：
```
<sw1>system-view 
[sw1]stp region-configuration 
[sw1-mst-region]region-name huawei
[sw1-mst-region]revision-level 1
[sw1-mst-region]instance 1 vlan 10
[sw1-mst-region]instance 2 vlan 20
[sw1-mst-region]active region-configuration 
[sw1-mst-region]quit
[sw1]
```






## 参考资料
 - [H3C MSTP技术介绍](https://www.h3c.com/cn/d_200805/605864_30003_0.htm)