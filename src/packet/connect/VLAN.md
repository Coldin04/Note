---
title: VLAN的基本配置
order: 1
---

## 1、VLAN的创建与命名
```shell
Switch#vlan database
Switch(vlan)#vlan 10 name teacher

Switch(vlan)#vlan 20 name student

Switch(vlan)#exit

Switch#show vlan      //显示VLAN信息

```

## 2、把端口划分到各自VLAN中
```shell
Switch#conf t
Switch(config)#interface f0/1

Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 10
Switch(config-if)#no shutdown 
Switch(config-if)#exit

Switch(config)#interface f0/2
Switch(config-if)#switchport mode access
Switch(config-if)#switchport access vlan 10
Switch(config-if)#no shutdown 
Switch(config-if)#exit

Switch(config)#interface range f0/3-4
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#switchport access vlan 20
Switch(config-if-range)#no shut
Switch(config-if-range)#no shutdown 

Switch#show vlan
```

## 3、分别给PC赋予IP地址 192.168.1.2---192.168.1.5

(1)PC0来ping 不同主机，相同交换机上相同VLAN可以正常通信，不同VLAN无法通信。

(2)PING 不同主机，不同交换机上 默认VLAN1可以通信。 
划分新的VLAN 不能正常通信，要想通信，交换机的级联端口必须设置trunk链路模式。

```shell
Switch(config)#interface f0/24
Switch(config-if)#switchport mode trunk 
Switch(config-if)#switchport trunk allowed vlan all
```

## 4、禁用DNS查找

```shell
Switch(config)#no ip domain-lookup
```
