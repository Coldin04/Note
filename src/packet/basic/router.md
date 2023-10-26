---
title: 路由器的基础配置
order: 2
---
# 路由器基本配置

## 常见模式：
 1. 用户模式
 2. 特权模式
 3. 全局配置模式

## 设备口令的配置

```
Router(config)#line console 0
Router(config-line)#password password
Router(config-line)#loginColdin04/Class-notesColdin04/Class-notes
```

## 为路由器设置密码

```
Router(config)#enable password xxx
Router(config)#enale secret xxx
```

## LAN接口配置

```
Router(config)#interface f0/0
Router(config-if)#ip address IP 地址子网掩码
Router(config-if)#no shutdown
```
`show ip interface f0/0`可用来查看配置参数。

## WAN接口的配置

```
Router(config)#interface Serial 0/0
Router(config-if)#ip address IP地址的子网掩码
```


## 控制台密码配置
```
Router(config)#line console 0
Router(config-line)#password coldin04
Router(config-line)#login
Router(config-line)#exit
```
## 远程登录配置
```
Router(config)#line vty 0 15
Router(config-line)#login
Router(config-line)#password coldin04
```
## 使能密码配置
```
Router(config)#enable password coldin04
Router(config)#enable secret coldin04
```

## 保存配置
```
Router#copy running-config startup-config
Router#sh startup-config
```

# 路由器密码恢复

## Cisco IOS 软件的引导选项
### 1. 闪存(略,正常启动)
### 2. ROM Monitor
```
Router#configure terminal
Router(config)#boot system rom
Router(config)#copy running-config startup-configure 
```
### 3. 网络服务器
```
Router#configure terminal
Router(config)#boot system tftp:// test.bin 192.168.1.1
Router(config)#copy running-config startup-config
Router(config)#reload
```

## 路由器口令恢复

1. 在启动过程中,按下`Ctrl+Break`键,进入ROM Monitor模式
2. 配置寄存器值
``` 
Rommon> confreg 0x2142
```
3. 重启路由器
```
Rommon> reset
```
4. 进入路由器后,恢复配置
```
Router#copy startup-config running-config
```
5. 在全局模式下重新配置密码
```
Router(config)#enable password coldin04
Router(config)#enable secret coldin04
```
6. 保存配置
```
Router#write
Router#reload
```

# 路由系统的恢复和备份

## TFTP协议介绍
TFTP（Trivial File Transfer Protocol）是一种简单的文件传输协议，通常用于将文件从一个计算机传输到另一个计算机，特别是在计算机网络环境下。它是一种非常轻量级的协议，只支持文件的读和写操作，并且没有任何安全特性。

## 路由器升级
1. 将路由器Console口和PC的Cable连接起来,并使用RJ45双绞线连接PC网卡和交换机的任意一个端口
2. 分别设置PC和路由器的IP地址,确保在同一个网段
3. 测试PC和路由器是否能够相互ping通,在PC上ping路由器的IP地址,如果连通,则满足升级要求.
4. 启动TFTP服务器,并将升级文件放在TFTP服务器的指定目录下
5. 进入路由器的全局配置模式,配置路由器的升级文件
```
Router(config)#copy tftp:// flash:
```

## 特权模式下使用`copy`命令升级路由器
```
//先配置PC机的ip地址,并为连接的交换机接口也配置好ip
Router#copy tftp:// flash:
```

## ROM监事模式下,使用`tftpdnld`命令升级路由器
连接好路由器和PC机后,按下`Ctrl+Break`键(用Ctrl+C替代),进入ROM监事模式.
在本例中,PC机的IP地址为172.16.1.223,子网掩码为255.255.255.0,在超级终端中为路由器配置ip地址
```
rommon 3 >IP_ADDRESS=172.16.1.1
rommon 4 >IP_MASK=255.255.255.0
rommon 5 >DEFAULT_GATEWAY=172.16.1.223
rommon 6 >TFTP_SERVER=172.16.1.223
rommon 7 >TFTP_FILE=c2600-is-mz.124-15.bin
rommon 8 >sync
rommon 9 >tftpdnld
```
