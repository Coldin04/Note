---
title: 分布式安装php和nginx，使其作为web服务器
order: 4
tag:
  - php
  - nginx
  - web
  - server
  - linux
  - centos
  - install
---

本章中服务器的ip地址分别为：

| 服务器 | ip地址 |
| :---: | :---: |
| nginx | 192.168.200.50 |
| php-fpm | 192.168.200.60|


## 安装nginx

书本上建议通过源码编译的方式安装nginx，但是我觉得这样太麻烦了，而且容易出错，因此我选择通过yum安装nginx。

设置EPEL源：
```bash
[root@localhost ~]# yum install epel-release yum-utils
```

添加和启动Remi源：
```bash
[root@localhost ~]# yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

安装nginx：
```bash
[root@localhost ~]# yum install nginx
```

## 配置nginx

修改`nginx.conf`文件，将`user`的值改为`nginx`,修改`location`的值为`/var/www/html`(存放网页的文件夹)。在`index`中添加`index.php`，使得nginx可以解析php文件。修改`php$`中`root`的值为存放网页的文件夹，`fastcgi_pass`的值为`192.168.200.60:9000`(php-fpm的地址),fastcgi_index的值为`index.php`,fastcgi_param的值为`SCRIPT_FILENAME $document_root$fastcgi_script_name`,`include`的值为`fastcgi_params`。

接着在`fastcgi_params`文件中添加`fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;`。



## 安装php

书本上建议通过源码编译的方式安装php，但是我觉得这样太麻烦了，而且容易出错，因此我选择通过yum安装php。

安装php及其组件：

```bash
[root@localhost ~]# yum install -y php56-php-fpm php56-php-cli php56-php-bcmath php56-php-gd php56-php-json php56-php-mbstring php56-php-mcrypt php56-php-mysqlnd php56-php-opcache php56-php-pdo php56-php-pecl-crypto php56-php-pecl-mcrypt php56-php-pecl-geoip php56-php-pecl-swoole php56-php-recode php56-php-snmp php56-php-soap php56-php-xmll
```

启用`php-fpm`:
```bash
[root@localhost ~]# systemctl enable php56-php-fpm
[root@localhost ~]# systemctl start php56-php-fpm
```

你可以通过以下命令配置`php-fpm`:
```bash
find /etc/opt/remi/php56 -name php.ini
find /etc/opt/remi/php56 -name www.conf
```

## 为Nginx和php创建用户和组

在两台机器中都执行以下命令：
```bash
[root@localhost ~]# groupadd -g 1001 nginx
[root@localhost ~]# useradd -u 900 -s /sbin/nologin nginx -g nginx
```

### 配置php-fpm
修改`/etc/opt/remi/php56/php-fpm.d/www.conf`文件，将`listen.allowed_clients`的值改为`192.168.200.50`


## 创建测试文件

在两台机器中`/var/www/html`文件夹下创建`index.php`文件，内容如下：
```php
<?php
phpinfo();
?>
```
为`/var/www/html`文件夹设置权限：
```bash
[root@localhost ~]# chown -R nginx:nginx /var/www/html
```

访问`192.168.200.50`，如果出现php的信息，则说明安装成功。