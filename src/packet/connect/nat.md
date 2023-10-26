---
title: NAT的配置
order: 9
---

## 建立内外转换模式

内接口指对向内网的一段的接口，外接口指对向外网一端的接口。
### 内接口
```she
Router(config)# ip nat inside
```

### 外接口
```sh
Router(config)# ip nat ouiside
```


## NAT一对一静态的转换

```sh
Router(config)# ip nat inside source static tcp 192.168.1.2 80 201.1.1.1 80 
Router(config)# ip nat inside source static tcp 192.168.1.3 20 201.1.1.1 20 
Router(config)# ip nat inside source static tcp 192.168.1.3 21 201.1.1.1 21 
Router(config)# ip nat inside source static udp 192.168.1.4 53 201.1.1.1 53 
```

## NAT多对多的转换

1、定义一个地址池
```
Router(config)#ip nat pool test 201.1.1.50 201.1.1.79 netmask 255.255.255.0 
```
2、定义一个源地址访问列表
```
Router(config)#access-list 1 permit 172.16.0.0 0.0.255.255 
```
3、把源地址ACL  映射到地址池中
```
Router(config)#ip nat inside source list 1 pool test overload
```

## NAT多对一的转换

1、定义一个源地址访问列表
```
Router(config)#access-list 2 permit 10.0.0.0 0.255.255.255
```

 2、把源地址ACL  映射到端口上
```
 Router(config)#ip nat inside source list 2 interface f0/0 overload
 ```
 