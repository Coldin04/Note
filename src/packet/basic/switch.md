---
title: 交换机基本配置
order: 1
---

# 基本配置

## 1、对交换机设置一个特权密码
```
Switch>enable 
Switch#conf t
Switch(config)#enable password 123
Switch(config)#enable secret 234
```

## 2、配置PC和交换机vlan1的IP地址
PC地址输入192.168.1.2

```
Switch(config)#interface vlan 1

Switch(config-if)#ip address 192.168.1.254 255.255.255.0
Switch(config-if)#no shutdown
Switch(config-if)#exit
```

## 3、配置线路虚拟终端密码
```
Switch(config)#line vty 0 1

Switch(config-line)#password 345
Switch(config-line)#login
Switch(config-line)#end

Switch#write
```
## 4、远程访问
```
C:\>telnet 192.168.1.254

Password: 

Switch>enable 
Password: 
```
## 5、修改交换机的提示符名称
```
Switch#conf t

Switch(config)#hostname S1
S1(config)#
```

## 6、设置控制台密码
```
S1(config)#line console 0
S1(config-line)#password 567
S1(config-line)#login
```

## 7、交换机默认网关
```
Switch(config)#ip default-gateway 192.168.1.1
```

## 8、显示交换机初始配置fan k
```
Switch#show running-config 
```
## 10、设置时间日期
```
Switch#clock set 08:57:00 23 feb 2023
```

## 11、重启交换机
```
Switch#reload
```

## 12、删除闪存中文件
```
Switch#delete config.text
```

## 13、删除NVRAM中文件
```
Switch#erase startup-config 
```

## 14、测试网络联通性
```
Switch#ping 192.168.1.1
```

# 端口安全配置

## 1、配置端口访问模式
```
Switch>enable 
Switch#conf t

Switch(config)#interface f0/1打成

Switch(config-if)#switchport mode access 
```

## 2、开启端口安全性
```
Switch(config-if)#switchport port-security 
```

## 3、指定安全MAC地址最大数量
```
Switch(config-if)#switchport port-security maximum 1
```
 
## 4、指定端口MAC地址的种类（静态或粘滞）

### (1)静态
```
Switch(config-if)#switchport port-security mac-address XXXX.XXXX.XXXX
```

### (2)粘滞的
```
Switch(config-if)#switchport port-security mac-address sticky XXXX.XXXX.XXXX
```

## 5、指定违反规则的动作行为
```
Switch(config-if)#switchport port-security violation shutdown 
```
# 备份和恢复交换机

## 1、误删除了操作系统，又重新启动了交换机。

## 2、误删除了操作系统，没有重新启动交换机。

### （1）配置PC和交换机的IP地址

```shell
Switch(config)#interface vlan 1

Switch(config-if)#ip ad

Switch(config-if)#ip address 192.168.1.254 255.255.255.0

Switch(config-if)#no shut
```

### （2）交换机操作系统和配置文件

```
flash://

nvram://
```

## 3、删除了操作系统文件或配置文件

```shell
Switch#delete flash:c2950-i6q4l2-mz.121-22.EA4.bin
```

## 4、恢复操作系统或配置文件

### （1）怎么备份

#### a、利用服务器tftp备份

```bash
Switch#copy flash: tftp:
```

#### b、利用交换机启动界面备份

### (2)恢复操作系统

```
Switch#copy tftp: flash:
```


## 5、利用ftp服务上传和下载

### （1）、上传

需要先设置ftp认证配置
```
Switch(config)#ip ftp username zhangsan
Switch(config)#ip ftp password 123
Switch#copy flash ftp
```

### （2）、下载

```
Switch#copy ftp flash
```
