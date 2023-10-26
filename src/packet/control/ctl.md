---
title: 访问控制列表的配置
order: 2
---

## 标准型IP访问列表
注意：标准访问列表数字范围在1~99之间
允许:
```shell
ISP(config)# access-list 1 permit 192.168.1.0 0.0.0.255
ISP(config)# access-list 1 permit any
```

拒绝：
```shell
ISP(config)# access-list 1 deny 192.168.1.0 0.0.0.255
ISP(config)# access-list 1 deny any
```

## 拓展型IP访问列表
注意：拓展访问列表数字范围在100以上

举例：不允许202.15.12.0 内的机器登录172.16.8.20 的FTP服务，但可以获取 172.16.8.20 的其他网络服务；网络 202.15.12.0 内的机器能够获取 172.16.8.10 的Web服务，其他访问拒绝。
```shell 
Router(config)# access-list 121 deny tcp 202.15.12.0 0.0.0.255 172.16.8.20 0.0.0.0 eq 21
Router(config)# access-list 121 permit ip 202.15.12.0 0.0.0.255 172.16.8.20 0.0.0.0
Router(config)# interdace e0
Router(config-if)# ip access-group 121 out
```

:::tip 注：
`ip access-group 121 out`中`out`用于控制从设备流出的流量
`in`用于控制从设备流出的流量。
:::
