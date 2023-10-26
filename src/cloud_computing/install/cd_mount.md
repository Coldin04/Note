---
title: 挂载CD并启动本地源
order: 2
date: 2023-10-08 23:37:00
tag: 
  - CentOS
  - "笔记"
  - "学习"
---

# 挂载CD
保证虚拟机的CD已配置好
![Pasted image 20231005225054.png](https://s2.loli.net/2023/10/08/6BGuNXhQV1jT8v4.png)

在挂载之前，可输入`mount`查看已挂载情况，如下图所示，如果光盘已挂载，请先取消。
![Pasted image 20231005225318.png](https://s2.loli.net/2023/10/08/CnQTWVJLrEki97D.png)

先创建`/opt/centos7`，来为CD-ROM提供一个挂载位。
```shell
[root@coldin04 ~]# cd /
[root@coldin04 /]# mkdir /opt/centos7
```
使用以下命令进行挂载
```
[root@coldin04 dev]# mount /dev/sr0 /opt/centos7
mount: /dev/sr0 写保护，将以只读方式挂载
```

# 配置本地源

先备份yum镜像源配置,然后新建配置目录并进入
```
[root@coldin04 etc]# mv yum.repos.d yum.repos.d.backup
[root@coldin04 etc]# mkdir yum.repos.d
[root@coldin04 etc]# cd yum.repos.d
```
新建`local.repo`，并写入以下配置
```
[centos-local]
name=centos-local
baseurl='file:///opt/centos7'
gpgcheck=0
enabled=1
```
![Pasted image 20231005230130.png](https://s2.loli.net/2023/10/08/eNHQonUvCIZVSbJ.png)
使用`ctrl+o`保存，`ctrl+x`退出

使用`yum makecache`更新镜像源，完成步骤。
![Pasted image 20231005230347.png](https://s2.loli.net/2023/10/08/7lR3bIcYPJuC4Oy.png)