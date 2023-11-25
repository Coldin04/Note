---
title: 安装WordPress
date: 2023-11-13
order: 3
tag:
  - LNMP
  - WordPress
  - PHP
  - MySQL
  - Nginx
  - Linux
---

## MySQL数据库的配置

进入mysql
  
```bash
[root@coldin04 ~]# mysql -uroot -ppassword
```

创建数据库

```bash
mysql> create database wordpress;
```
赋予用户权限

```bash
mysql> grant all privileges on wordpress.* to root@localhost identified by 'password';
mysql> grant all privileges on wordpress.* to root@'%' identified by 'password';
```

刷新权限

```bash
mysql> flush privileges;
```

退出mysql

```bash
mysql> exit;
```

## 安装WordPress

下载和解压WordPress

```bash
[root@coldin04 ~]# wget https://wordpress.org/latest.tar.gz
[root@coldin04 ~]# tar -zxvf latest.tar.gz
```

将WordPress文件夹移动到/home/wwwroot/default目录下

```bash
[root@coldin04 ~]# mv wordpress /home/wwwroot/default
```

修改文件夹权限

```bash
[root@coldin04 ~]# chown -R www:www /home/wwwroot/default/wordpress
```

## 配置网站

打开浏览器，输入服务器IP地址，进入WordPress配置界面。根据图形化的提示，完成配置。
