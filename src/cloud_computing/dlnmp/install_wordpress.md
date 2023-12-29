---
title: 在分布式的服务器群上安装wordpress
order: 7
tag:
  - wordpress
  - php
  - nginx
  - web
  - server
  - linux
  - centos
  - install
  - mysql
  - mariadb
  - 分布式
---

本章中服务器的ip地址分别为：

| 服务器 | ip地址 |
| :---: | :---: |
| mysql1 | 192.168.200.30 |
| mysql2 | 192.168.200.40 |
| nginx | 192.168.200.50 |
| php | 192.168.200.60 |

你可以根据这一章上述提示设置好这些服务器的应用，并按照上表配置好各个服务器的ip地址。

## 创建WordPress数据库

在mysql1上创建wordpress数据库：

```bash
[root@localhost ~]# mysql -u root -p
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 10
Server version: 5.5.56-MariaDB MariaDB Server
MariaDB [(none)]> create database wordpress;
Query OK, 1 row affected (0.00 sec)
```

## 安装WordPress

将从官网中下载的wordpress压缩包上传到nginx服务器和php服务器上，解压到`/var/www/html`目录下：

```bash
[root@localhost ~]# tar -zxvf wordpress-4.9.1-zh_CN.tar.gz -C /var/www/html/
```

请确保nginx和php服务器上的`/var/www/html`目录下有wordpress的文件，并按照本章节的教程配置好nginx和php。

## 配置WordPress

在浏览器中输入`192.168.200.50`，进入wordpress的配置界面，按照提示进行配置即可。如果配置无法自动保存，请根据提示将网页上给出的配置放入nginx和php服务器中`/var/www/html/wp-config.php`文件中。

如果一切顺利，你将会看到wordpress的欢迎界面。

此后，你可以在浏览器中使用图形化界面操作你的wordpress网站了。

## 参考资料

 - 《云计算平台运维与开发（初级）》
 - [Github Copilot](https://copilot.github.com/)