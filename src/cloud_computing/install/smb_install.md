---
title: 配置Samba服务
order: 6
date: 2023-10-30 09:37:00
tag: 
  - CentOS
  - "笔记"
  - "学习"
---

Samba，是种用来让UNIX系列的操作系统与微软Windows操作系统的SMB/CIFS（Server Message Block/Common Internet File System）网络协议做链接的自由软件。第三版不仅可访问及分享SMB的文件夹及打印机，本身还可以集成入Windows Server的网域，扮演为网域控制站（Domain Controller）以及加入Active Directory成员。简而言之，此软件在Windows与UNIX系列操作系统之间搭起一座桥梁，让两者的资源可互通有无。

`smbd`: 提供文件打印服务，授权/被授权
`nmbd`: 提供名称解析和浏览服务

smb占用端口:`137、138、139、445`

# 安装Samba

先更新源：
```
yum makecache
```
安装软件：
```
[root@samba ~]# yum instaljjl -y samba
```

# 配置文件

Samba的配置文件为：`/etc/samba/smb.conf`

1. 修改 `[global] `中的
```
        load printers = no
        cups options = raw
        ;printcap name = /dev/null
```
2. 添加:
```
[share]
        path = /opt/share
        browseable = yes
        public = yes
        writable = yes
```

之后创建目录：
```
[root@samba ~]# mkdir /opt/share
[root@samba ~]# chmod 777 -R /opt/share
```

# 启动和初始化：
启动服务：
```
[root@samba ~]# systemctl start smb
[root@samba ~]# systemctl start nmb
```

在samba中创建用户：
```
[root@samba ~]# smbpasswd -a coldin04
New SMB password:
Retype new SMB password:
Added user coldin04.
[root@samba ~]#
```
:::info 命令拓展：
-a    新建用户
-d    冻结用户
-e    恢复用户
-n    设置空密码
-x     删除已创建的用户
:::

# 放行防火墙：
```
[root@samba ~]# firewall-cmd --permanent --zone=public --add-service=samba
success
[root@samba ~]# firewall-cmd --reload
success
```

记得重载samba服务：
```
[root@samba ~]# service smb restart
Redirecting to /bin/systemctl restart smb.service
```

# 连接：

Windows中打开文件管理器，在地址栏输入：`\\192.168.200.20`(服务器的ip地址)，在提示下登录之前设置的用户名密码。