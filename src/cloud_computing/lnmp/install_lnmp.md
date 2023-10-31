---
title: 手动部署LNMP
order: 2
date: 2023-10-31 23:09:11
tags:
- LNMP
- Linux
- Nginx
- MySQL
- PHP
- 手动部署
---

上面提到，LNMP的一键脚本安装并不是很安全，因此，我们可以通过手动部署的方式来安装LNMP。

:::warning 注意
本文参考了[阿里云帮助中心](https://help.aliyun.com/zh/ecs/use-cases/manually-build-an-lnmp-environment-on-a-centos-7-instance#6f68d23004893) ，特此感谢。
:::

# 关闭防火墙

```bash
systemctl stop firewalld
systemctl disable firewalld
```
# 关闭SELinux

```bash
sudo vi /etc/selinux/config
```
找到`SELINUX=`，按i进入编辑模式，修改为`SELINUX=disabled`

关于SELinux的讨论，可以看看[知乎上的这个问题](https://www.zhihu.com/question/20559538)

# 安装Nginx
```
yum install nginx
```
或者参考[阿里云的文档](https://help.aliyun.com/zh/ecs/use-cases/manually-build-an-lnmp-environment-on-a-centos-7-instance#section-0ho-omf-0ct) 编译安装其他版本的Nginx。

# 安装MySQL

首先，更新和添加MySQL的yum源

```bash
sudo rpm -Uvh  http://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
```

:::tip 提示
如果提示报错信息No match for argument，您需要先运行命令sudo yum module disable mysql禁用默认的MySQL模块，再安装MySQL。
:::

```bash
sudo yum -y install mysql-community-server --nogpgcheck
```
安装后，可以通过`mysql --version`查看MySQL的版本。

运行以下命令，启动MySQL并配置开机自启动

```bash
sudo systemctl start mysqld
sudo systemctl enable mysqld
sudo systemctl daemon-reload
```

# 安装PHP

先添加EPEL源和Webtatic源

```bash
sudo yum install \
https://repo.ius.io/ius-release-el7.rpm \
https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

sudo rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
```
运行以下指令安装：
```bash
sudo yum -y install php70w-devel php70w.x86_64 php70w-cli.x86_64 php70w-common.x86_64 php70w-gd.x86_64 php70w-ldap.x86_64 php70w-mbstring.x86_64 php70w-mcrypt.x86_64  php70w-pdo.x86_64   php70w-mysqlnd  php70w-fpm php70w-opcache php70w-pecl-redis php70w-pecl-mongodb
```

# 配置
## 配置MySQL

首先，查看MySQL的初始密码

```bash
sudo grep 'temporary password' /var/log/mysqld.log
```

其中ARQTRy3+****为MySQL的初始密码。

运行`sudo mysql_secure_installation`来配置安全性
根据提示配置即可。


## 修改配置，使PHP-FPM可以使用Nginx

```bash
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
```

编辑`/etc/nginx/nginx.conf`，添加或修改location /配置信息。

```
        location / {
            index index.php index.html index.htm;
        }
```
添加或修改location ~ .php$配置信息。

```
        #添加下列信息，配置Nginx通过fastcgi方式处理您的PHP请求。
        location ~ .php$ {
            root /usr/share/nginx/html;    #将/usr/share/nginx/html替换为您的网站根目录，本文使用/usr/share/nginx/html作为网站根目录。
            fastcgi_pass 127.0.0.1:9000;   #Nginx通过本机的9000端口将PHP请求转发给PHP-FPM进行处理。
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;   #Nginx调用fastcgi接口处理PHP请求。
        }
```

然后设置php开机自启动：

```bash
sudo systemctl start php-fpm
sudo systemctl enable php-fpm
```