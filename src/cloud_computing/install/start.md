---
title: 安装系统和网络配置
date: 2023-10-08 23:37:00
order: 1
tags:
  - CentOS
  - "笔记"
  - "学习"
---

本篇笔记将介绍如何安装CentOS操作系统以及进行基础配置。我们将使用VMware Workstation软件创建虚拟机，并在之后的内容中详细介绍每个步骤。通过本篇笔记，读者将能够了解并掌握在虚拟机中安装和配置CentOS的方法。让我们一起开始吧！

写这篇笔记,主要是方便记录配置过程,也方便自己的同学复习。如果你也觉得有用,欢迎点个赞哦~

# 安装
使用Vmare Workstation 创建虚拟机以安装CentOS,启动软件后，选择新建虚拟机：
![新建虚拟机.png](https://s2.loli.net/2023/10/08/yRMSq2Ju4EkNnB1.png)

在弹出的窗口中选择自定义
![自定义新建虚拟机向导.png](https://s2.loli.net/2023/10/08/G7bKUl4istwgcX5.png)
将硬件兼容性调旧（方便在学校机房使用，若仅在个人笔记本使用，无需修改）
![兼容性.png](https://s2.loli.net/2023/10/08/JKTYlI1oB2x4WDz.png)
选择CentOS镜像位置并继续：
![Pasted image 20231005215749.png](https://s2.loli.net/2023/10/08/7vy1fZLkDdh28Qa.png)
其他保持默认选项，创建完成后自定义硬件，在此处自定义网络模式，并保证“虚拟网络编辑器”中按照要求配置：
![Pasted image 20231005215924.png](https://s2.loli.net/2023/10/08/3NOFcnXEwuxZDHA.png)
![Pasted image 20231005220040.png](https://s2.loli.net/2023/10/08/Z6Rw2aTqDdUHiJP.png)

开启虚拟机后，根据提示安装，并注意修改如下设置你的CentOS7
# 安装
使用Vmare Workstation 创建虚拟机以安装CentOS,启动软件后，选择新建虚拟机：
![新建虚拟机.png](https://s2.loli.net/2023/10/08/yRMSq2Ju4EkNnB1.png)

在弹出的窗口中选择自定义
![自定义新建虚拟机向导.png](https://s2.loli.net/2023/10/08/G7bKUl4istwgcX5.png)
将硬件兼容性调旧（方便在学校机房使用，若仅在个人笔记本使用，无需修改）
![兼容性.png](https://s2.loli.net/2023/10/08/JKTYlI1oB2x4WDz.png)
选择CentOS镜像位置并继续：
![Pasted image 20231005215749.png](https://s2.loli.net/2023/10/08/7vy1fZLkDdh28Qa.png)
其他保持默认选项，创建完成后自定义硬件，在此处自定义网络模式，并保证“虚拟网络编辑器”中按照要求配置：
![Pasted image 20231005215924.png](https://s2.loli.net/2023/10/08/3NOFcnXEwuxZDHA.png)
![Pasted image 20231005220040.png](https://s2.loli.net/2023/10/08/Z6Rw2aTqDdUHiJP.png)

开启虚拟机后，根据提示安装，并注意修改如下设置，软件选择改为`GNOME桌面`。
![Pasted image 20231005220458.png](https://s2.loli.net/2023/10/08/xgGOwvp9nPJSkfV.png)
记得配置本页中的两个选项
![Pasted image 20231005220619.png](https://s2.loli.net/2023/10/08/FRU63gpIjQAKHzh.png)