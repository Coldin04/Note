---
title: 通过一键脚本安装LNMP
order: 1
date: 2023-10-31 15:21:21
---

:::danger 请注意！
我本人很不推荐使用一键脚本安装，至少是通过[lnmp.org](https://lnmp.org)进行安装。在此之前，该脚本[被曝光被投毒](https://mp.weixin.qq.com/s/OT7C1l5rjBNCawFXRIUJOQ)。因此，使用这种方式请务必注意。
:::

# 下载脚本

在[lnmp.org](https://lnmp.org)的[下载页面](https://lnmp.org/download.html)中，我们可以找到一键脚本的下载链接,下载`lnmp-full.tar.gz`文件,并通过合适方式导入虚拟机中。

# 安装
先解压文件
```bash
tar -zxvf lnmp-full.tar.gz
```
进入解压后的文件夹
```bash
cd lnmp1.6-full
```
执行安装脚本
```bash
./install.sh lnmp
```
安装过程中，会提示输入MySQL的root密码，输入后等待编译即可。

等待数分钟后，当提示`Congratulations! Install LNMP V1.6 completed!`时，说明安装完成。