---
title: 安装所用工具
date: 2023-11-25
order: 2
tag:
  - LNMP
  - WordPress
  - PHP
  - MySQL
  - Nginx
  - Linux
  - 分布式
  - 云计算
---

这章的内容和上一章的内容有很多重复，但这章主要强调的工具分布式安装，所以，这篇笔记的内容主要是工具的安装。

::: warning 一点小建议
这里我踩过坑，第三章使用脚本配置lnmp环境后，因为脚本和前面的步骤对系统环境改动较多，因此，建议全新安装CentOS系统后，再进行配置。在安装中，勾选`服务器`中的`MariaDB`和`Web服务器`中的`PHP Support`，这样可以减少后续的安装步骤。然后，参考第一章的“安装系统和网络配置”和”挂载CD并启动本地源“配置服务器。
:::

## 安装MariaDB

`MariaDB`是`MySQL`的一个分支，它是由`MySQL`的开发者创建的，它的功能和`MySQL`基本一致，但是它的功能比原版好，所以，我们选择安装`MariaDB`。

::: tip 注意
需要注意的是，`MariaDB`在部分版本中，和新的`MySQL`版本疑似存在冲突，所以，部分情况下，需要先停止`MySQL`服务，再安装`MariaDB`。
:::

### 安装MariaDB

```bash
[root@coldin04 ~]# yum install mariadb mariadb-server
```
### 启动MariaDB

```bash
[root@coldin04 ~]# systemctl stop mysql （部分情况下）
[root@coldin04 ~]# systemctl start mariadb
```

设置MariaDB开机启动

```bash
[root@coldin04 ~]# systemctl enable mariadb
```

### 配置MariaDB

输入`mysql_secure_installation`命令，按照提示进行配置。

如果遇到`ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2)`错误，可以看[我博客中提供的解决方案](https://blog.coldin.top/2023/11/21/mysql2002/)


::: tip 注意
请注意，在我检索资料时发现，该脚本在新版本中可能已经过时，所以，个人建议，这部分请手动配置。
:::

