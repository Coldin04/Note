---
title: 配置FTP服务
order: 4
date: 2023-10-08 23:37:00
tag: 
  - CentOS
  - "笔记"
  - "学习"
---

# 配置FTP

FTP全名`File Transfer Protocol`，默认端口号为21

## 安装
挂载软件光盘后
```
[root@coldin04 ~]#yum install vsftpd -y
[root@coldin04 ~]#cp /etc/vsftpd/vsftpd.conf /etc/vsftpd/vsftpd.conf.backup
```
```
[root@coldin04 ~]#nano /etc/vsftpd/vsftpd.conf
```

在第一行增加 anon_root=/opt
```
[root@coldin04 ~]#systemctl start vsftpd
```

## 查看端口运行
```
[root@coldin04 ~]#netstat -ntpl
```

## 放行防火墙
```
[root@coldin04 ~]#firewall-cmd --zone=public --add-port=21/tcp --permanent
[root@coldin04 ~]#firewall-cmd --add-service=ftp --permanent
[root@coldin04 ~]#firewall-cmd --reload
```

## 启动服务
```
[root@coldin04 ~]#systemctl start vsftpd