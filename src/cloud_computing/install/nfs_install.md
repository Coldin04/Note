---
title: 配置NFS服务
order: 5
date: 2023-10-08 23:37:00
tag: 
  - CentOS
  - "笔记"
  - "学习"
---

# 配置NFS

注意，NFS需要一个客户端进行连接验证，可以尝试重新参考上面配置一个新的CentOS(或其他Linux发行版)的虚拟机。建议将这台机器的IP设置为`192.168.200.20`。

>注：本节中`nfs-s`指的是作为服务端的虚拟机，而`nfs-c`指的是作为客户端的虚拟机。

设置完成后，分别保证两个虚拟机已`yum makecache`，请注意部分命令需要在root下运行。

## 安装
分别在两台虚拟机中安装：
```
[root@nfs-s ~]# yum install nfs-utils rpcbind

[root@nfs-c ~]# yum install nfs-utils rpcbind
```

安装完成后，切换到服务端，创建目录：
```
[root@nfs-s ~]# cd /
[root@nfs-s /]# mkdir /mnt/nfs_test
```

然后，编辑配置文件：
```
[root@nfs-s /]# nano /etc/exports                                               

写入（注意没有换行！）：
/mnt/nfs_test 192.168.200.0/24(rw,no_root_squash,no_all_squash,sync,anonuid=501,anongid=501)
```

保存完成后，添加防火墙规则，以便于访问：
```
[root@nfs-s]# firewall-cmd --permanent --add-service nfs
[root@nfs-s /]# firewall-cmd --reload

[root@nfs-c]# firewall-cmd --permanent --add-service nfs
[root@nfs-s /]# firewall-cmd --reload
```

或者关闭防火墙:
```
[root@nfs-s]# setenforce 0
[root@nfs-s]# systemctl stop firewalld
```

## 启动和挂载

```
[root@nfs-s /]# exportfs -r
[root@nfs-s /]# systemctl start rpcbind
[root@nfs-s /]# systemctl start nfs
```

启动完成后，可使用以下方式查看可挂载目录：
```
[root@nfs-s /]# showmount -e 192.168.200.10
```

此时切换到客户机，进行挂载操作：
```
[root@nfs-c ~]# mount -t nfs 192.168.200.10:/mnt/nfs_test /mnt
[root@nfs-c ~]# df -h
文件系统                      容量  已用  可用 已用% 挂载点
devtmpfs                      446M     0  446M    0% /dev
tmpfs                         487M  4.0K  487M    1% /dev/shm
tmpfs                         487M   15M  472M    3% /run
tmpfs                         487M     0  487M    0% /sys/fs/cgroup
/dev/mapper/centos-root        17G  5.5G   12G   32% /
/dev/sda1                    1014M  215M  800M   22% /boot
tmpfs                          98M   36K   98M    1% /run/user/1000
/dev/sr0                      4.5G  4.5G     0  100% /run/media/coldin04/CentOS 7 x86_64
tmpfs                          98M     0   98M    0% /run/user/0
192.168.200.10:/mnt/nfs_test   17G  5.5G   12G   32% /mnt
[root@nfs-c ~]# 
```