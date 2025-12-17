---
title: DHCP的配置与管理
order: 7
---
# DHCP配置与管理

## 配置命令

```shell
RA# conf t
RA(config)# service dhcp
RA(config)# ip dhcp pool name
RA(dhcp-config)# network 192.168.1.0 255.255.255.0
RA(dhcp-config)# default-router 192.168.1.1
RA(dhcp-config)# dns-server 192.168.1.1

# 下面为拓展

RA(dhcp-config)# domain-name cold04.com
RA(dhcp-config)# netbios-name-server 192.168.1.1
RA(dhcp-config)# client-name bigserver
```

## DHCP排除

```shell
RA(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.100
```

## DHCP转发
:::warning
之前没记录明白，欢迎补充
:::
```shell
Router(config)#ip dhcp relay information trust-all
```

## DHCP租期

格式: `lease [days] [hours] [minutes]`
```shell
Router(config)# ip dhcp pool xx
Router(dhcp-config)# lease 2 12 30
```
无限租约：
```shell
Router(dhcp-config)#lease infinite
```

## 查看DHCP租约

```shell
Router(dhcp-config)# ip dhcp binding
```

