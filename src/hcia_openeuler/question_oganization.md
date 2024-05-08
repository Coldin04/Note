---
title: 题目整理
#icon: "fa-brands fa-opensuse"
order: 1
---

这里是学习过程中发现的有意思的题目

# 2024-05-06

## [单选]以下关于本地软件仓库描述正确的是哪一项？

A、不管是本地软件仓库还是远程软件仓库，仓库中都必须至少包含软件包和repodata目录.

B、默认情况下,本地仓库的配置文件应放在/etc/yum. repos. d目录中，名字可以不以repo结尾。 

C、只要当前系统中指定的目录里存放了所需软件包，并且在配置文件中指定该目录路径，那么就可以使用dnf或yum工具安装软件包并能够解决依赖关系

D、本地软件仓库的软件包必须来自于当前系统镜像。

## 以下选项中哪条命令可以列出rpm包的文件清单？

A、 rpm -ql

B、   rpm -aq

C、  rpm -qi

D、  rpm —qlp

## 在openEuler的/tmp/test下包含了以下文件及目录：以下哪个选项是命令“ls /tmp/test | grep sys | wc -l”的返回值？
(图片中有四个sys的文件)

 
A、4
 
B、3
 
C、2
 
D、1

## 在openEuler系统中运行了以下脚本,以下哪一项为输出的NUM的值？

```bash
#！/bin/bash 
# NUM=5 
“NUM”=6 
NUM=7 
echo ＄NUM 
```

A、0
 
B、7
 
C、6
 
D、5

:::tip 评价
nmdb出题能不能靠谱点，原来那格式写给鬼看的啊
:::

## openEuler系统中，以下哪个选项可以判断cron任务是否按时顺利执行完成？
 
A、 查看/var/log/crontab日志文件
 
B、   查看/var/log/cron.d日志文件
 
C、  查看/var/log/anacron日志文件
 
D、  查看/var/log/cron日志文件

## openEuler系统中，以下关于PE的描述，哪个选项是正确的？
 
A、新的PV在加入VG前，需要将PE修改成和现有PV—样的大小
 
B、所有PV中的PE大小建议保持一致，如果存在多种容量，将以最小容量进行存放数据
 
C、PE的默认大小为64K
 
D、PE的大小可以指定，但是—旦确定了就不能再改变

## 在MBR分区方案中，分区表占用的字节长度为多少？

A、446
 
B、64
 
C、512
 
D、2

:::tip 评价
出题的你能不能走点心
:::

## openEuler系统中，逻辑卷LV是由LE组成的，与LE相对应的物理单元是什么？
 
A、PG
 
B、VG
 
C、PV
 
D、PE

## 以下哪条命令不能确定httpd软件包是否已经安装？
 
A、yum(dnf) list installed httpd
 
B、rpm —a  httpd
 
C、rpm —q  httpd
 
D、dnf  Iist  installed  httpd

## 以下哪条命令可以查看已安装的vsftpd软件包所安装的相关文件？

A、rpm --qlp vsftpd
 
B、rpm --ql vsftpd
 
C、rpm --qa vsftpd
 
D、rpm --qi vsftpd

## 以下选项中哪条命令可以查看vsftpd服务是否开机自动启动?

A、systemctl list-units --type service --all
 
B、systemctl is-active vsftpd
 
C、systemctl list-units --type service
 
D、systemctl list-unit-files | grep vsftpd

::: tip
到底有没有用过linux就出题目啊，格式乱就算了，字麻烦别打错啊，你那选项一个都没法选
:::

## Linux系统中，以下哪个选项是管理员root用户的UID？

A、0
 
B、1000
 
C、1
 
D、999

## 在Linux系统中，要保持文件属性信息不变的情况下，将/var/lib/mysql目录及目录下的所有文件拷贝到/data目录中，正确的命令格式是：

A、`cp—r/var/lib/mysql/data`
B、`cp —r /var/lib/mysql /* /data`
C、`cp —p /var/lib/mysqlqq /data`
D、`cp -a /var/lib/mysql /data`

## 设定文件 /data/file1 的权限，以便仅允许用户 huawei01 查看和修改该文件内容，同时确保其他普通用户没有任何权限。下列哪个命令序列可以实现这一需求？

A. setfacl -m u:huawei01:rw /data/file1; chmod 640 /data/file1
B. setfacl -m u:huawei01:rx /data/file1; chmod o=— /data/file1
C. setfacl -m g:huawei01:rw /data/file1; chmod 640 /data/file1
D. setfacl -m u:huawei01:rw /data/file1; chmod o-r /data/file1

## 题目：如需从/etc/passwd文件中抽取用户的用户名和家目录信息，下列哪些命令是正确的执行方式？

A. cut -d: -f1,6 /etc/passwd
B. awk -F: '{print 1,6}' /etc/passwd
C. cut -f: -d: -l1,6 /etc/passwd
D. awk -F: '{print $1,$6}' /etc/passwd

## 以下哪些命令可以用于关闭Linux操作系统？

A. halt
B. shutdown
C. reboot
D. poweroff

## 下列哪些命令不支持直接将多个文件压缩成一个单一的压缩文件？

A. gzip
B. xz
C. zip
D. bzip2

## 假设crror.log是用户创建的用来记录错误信息的一个文件，以下哪些选项的执行结果，会记录到此文件中?

A、find/-name new 2>>error.log
B、ls /etc 2>> error.log
C、ls /etc &>> error.log
D、ecbo “openEuler” 2>> error.log

## openEuler系统中，使用哪些命令可以查看到网卡eth0的IP地址？

A、 ip addr show eth0
B、  nmcli  device show eth0
C、  ifconfig eth0
D、  nmcli  con  show  eth0

## 使用vim编辑器进行文件内容的查找与替换时，必须以斜杠（/）作为分隔符，如：%s/查找的内容/替换的内容。

A、正确
B、错误

## 请补充完整以下命令，将逻辑卷test的容量从10G扩容到15G:Lvextend -L 10G _________G test.

答案 15/+5

## 下图为file1文件的acl信息，补全以下命令，使其可以删除huawei用户对该文件的acl策略：setfac1 -x________ file1。

答案：u:huawei

## Linux系统中，sort命令可以对文件进行排序操作，若要对file.txt文件按照数字并且去重排序。请补全相关命令选项：sort________file.txt.

答案: -nu

## openEuler系统默认的文件系统类型为__________。

答案：ext4

## openEuler系统中，管理员使用useradd命令创建用户，默认情况下自动生产的用户uid的范围是由_______文件定义的

答案：login.defs

