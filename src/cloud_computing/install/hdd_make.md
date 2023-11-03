---
title: 配置一块新硬盘并挂载
date: 2023-10-09 23:37:00
order: 3
tag:
  - CentOS
  - "笔记"
  - "学习"
---


# 配置硬盘
先在虚拟机设置中,添加一块新硬盘,容量设置任意均可。
![image.png](https://s2.loli.net/2023/10/16/xd1XCazJjFNZQ8G.png)

此时可查看磁盘挂载情况：
![image.png](https://s2.loli.net/2023/10/16/nMBk7ju9dKhIgYW.png)

根据下面的提示框输入：
```
[root@coldin04 ~]# fdisk /dev/sdb
欢迎使用 fdisk (util-linux 2.23.2)。

更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。

Device does not contain a recognized partition table
使用磁盘标识符 0xb80cc114 创建新的 DOS 磁盘标签。

命令(输入 m 获取帮助)：n
Partition type:
   p   primary (0 primary, 0 extended, 4 free)
   e   extended
Select (default p): p
分区号 (1-4，默认 1)：1
起始 扇区 (2048-41943039，默认为 2048)：
将使用默认值 2048
Last 扇区, +扇区 or +size{K,M,G} (2048-41943039，默认为 41943039)：+5G
分区 1 已设置为 Linux 类型，大小设为 5 GiB

命令(输入 m 获取帮助)：n
Partition type:
   p   primary (1 primary, 0 extended, 3 free)
   e   extended
Select (default p): e
分区号 (2-4，默认 2)：2
起始 扇区 (10487808-41943039，默认为 10487808)：
将使用默认值 10487808
Last 扇区, +扇区 or +size{K,M,G} (10487808-41943039，默认为 41943039)：+5G
分区 2 已设置为 Extended 类型，大小设为 5 GiB

命令(输入 m 获取帮助)：w
The partition table has been altered!

Calling ioctl() to re-read partition table.
正在同步磁盘。
[root@coldin04 ~]# 
```

显而易见，磁盘创建成功：
![image.png](https://s2.loli.net/2023/10/16/TxUvKri3RyJ5bHp.png)

## 创建PV
```
[root@coldin04 ~]# pvcreate /dev/sdb[1-2]
  Device /dev/sdb2 excluded by a filter.
  Physical volume "/dev/sdb1" successfully created.
```
创建成功后，可以使用以下命令查看：
```
pvs 
pvscan
pvdisplay
```

## 创建卷组
```
[root@coldin04 ~]# vgcreate -s 200m name /dev/sdb1
  Volume group "name" successfully created
```

## 创建LV
```
[root@coldin04 ~]# lvcreate -n lv_sdb -L 400m name
  Logical volume "lv_sdb" created.
```

## 格式化
```
[root@coldin04 ~]# mkfs.ext4 /dev/name/lv_sdb 
......
Allocating group tables: 完成
正在写入inode表: 完成
Creating journal (8192 blocks): 完成
Writing superblocks and filesystem accounting information: 完成 
```

## 挂载
```
[root@coldin04 ~]# mount /dev/name/lv_sdb /opt/rh
```
可通过 `df -h`查看挂载结果
```
[root@coldin04 ~]# df -h
文件系统                 容量  已用  可用 已用% 挂载点
devtmpfs                 470M     0  470M    0% /dev
tmpfs                    487M     0  487M    0% /dev/shm
tmpfs                    487M  8.3M  478M    2% /run
tmpfs                    487M     0  487M    0% /sys/fs/cgroup
/dev/mapper/centos-root   17G  5.5G   12G   32% /
/dev/sda1               1014M  215M  800M   22% /boot
tmpfs                     98M   12K   98M    1% /run/user/42
/dev/mapper/name-lv_sdb  380M  2.3M  354M    1% /opt/rh
[root@coldin04 ~]#
```