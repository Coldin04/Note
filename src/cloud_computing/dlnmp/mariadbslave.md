---
title: MariaDB主从复制
date: 2023-11-28
order: 3
---

## 配置主从复制

###  添加hosts

在主服务器和从服务器上，都需要添加如下内容：

```bash
[root@coldin04 ~]# vim /etc/hosts
192.168.200.30	mysql1
192.168.200.40 mysql2
```

### 配置主服务器

先设置主服务器的hostname：

```bash
[root@coldin04 ~]# hostnam mysql1
```


使用`vim`编辑`/etc/my.cnf`文件，添加如下内容：

```bash
[mysqld]
server-id = 30
log-bin = mysql-bin
binlog_ignore_db = mysql
```

然后，重启`MariaDB`服务：

```bash
[root@mysql1 ~]# systemctl restart mariadb
```

进入mysql，创建一个用于从服务器连接的用户：

```bash
mysql>  grant all privileges on *.* to root@'%' identified by "password";
mysql> grant replication slave on *.* to 'user'@'mysql2' identified by 'password';
```

然后，刷新权限：

```bash
mysql> flush privileges;
```

### 配置从服务器

设置从服务器的hostname：

```bash
[root@coldin04 ~]# hostnam mysql2
```

使用`vim`编辑`/etc/my.cnf`文件，添加如下内容：

```bash
[mysqld]
server-id = 40
log-bin = mysql-bin
binlog_ignore_db = mysql
```

然后，重启`MariaDB`服务：

```bash
[root@mysql2 ~]# systemctl restart mariadb
```

进入mysql，创建slave：

```bash
mysql> change master to master_host='mysql1',master_user='user',master_password='password';
```

启动slave：

```bash
mysql> start slave;
```

启动后，查看slave状态：

```bash
mysql> show slave status\G;
```
当显示`Slave_IO_Running: Yes`和`Slave_SQL_Running: Yes`时，表示主从复制配置成功。

### 测试主从复制

在主服务器上创建一个数据库、数据表，并添加一个数据：

```bash
mysql> create database test;
mysql> use test;
mysql> create table test(id int(11) not null primary key,name varchar(255) not null，class varchar(255) not null);
mysql> insert into test values(1,'coldin','class1');
```

在从服务器上查看是否同步：

```bash
mysql> use test;
mysql> select * from test;
```

## 参考资料
部分内容由Github Copilot生成。