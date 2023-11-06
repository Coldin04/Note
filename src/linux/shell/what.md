---
title: 什么是Shell脚本，Shell脚本的作用，如何用Shell脚本写Hello World
order: 1
tag:
  - Shell
  - Linux
  - hello world
---

## 什么是Shell脚本

Shell 脚本是一个纯文本文档，其中包含了一系列的命令，这些命令可以被 Shell 一行一行的读取并执行。

Shell是一个用C语言编写的程序，是用户使用Linux的桥梁，用户的大部分工作都是通过Shell完成的。Shell既是一种命令语言，又是一种程序设计语言。我们习惯上称的Shell是指Shell程序，也就是Shell解释器，一般来说，Shell编程也不指的是Shell开发本身。

Shell脚本是一种为Shell编写的脚本程序。我们可以把Shell脚本看做是一种批处理文件，Shell脚本通常以.sh结尾。

## Shell脚本的作用

Shell脚本的作用是用来批量执行一系列的命令，这些命令可以是Linux系统命令，也可以是用户自定义的命令。

## Shell环境

Shell环境是指Shell程序运行的环境，包括了一些环境变量和Shell的配置文件。

常见的有:[^1]

* Bourne Shell（/usr/bin/sh或/bin/sh）
* Bourne Again Shell（/bin/bash）
* C Shell（/usr/bin/csh）
* K Shell（/usr/bin/ksh）
* Shell for Root（/sbin/sh）

Bourne Again Shell, 简称为 Bash，是大多数Linux系统默认的Shell。

## 如何用Shell脚本写Hello World

一般来说，我们可以用任何文本编辑器来编写Shell脚本，比如`vim`、`nano`、`gedit`等等。

最简单的Shell脚本是这样的：

```bash
#!/bin/bash
echo "Hello World !"
```

这个脚本的第一行`#!/bin/bash`是用来指定脚本的解释器的，这里指定的是`/bin/bash`，也就是Bash Shell。
第二行`echo "Hello World !"`是用来输出`Hello World !`的。

但在一些地方，会见到这样的写法：[^2]

```bash
#!/bin/bash
# Program:
# This program shows "Hello World!" in your screen.
# History:
# 2015/07/16 VBird First release
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
echo -e "Hello World! \a \n"
exit 0
```

其中，着重解释一下PATH这个变量，这个变量是用来指定Shell脚本的搜索路径的，也就是说，当我们在Shell脚本中执行一个命令时，Shell会按照这个变量的值去指定的路径中搜索这个命令，这样的好处是，当我们需要用到外部的程序（命令时），我们不需要指定这个程序的绝对路径，只需要在PATH中指定的路径中搜索就可以了。

当然，你可以很方便的在终端中执行`echo $PATH`来查看PATH的值。下面是我的PATH的值：
```zsh
░▒▓ ~/Doc/webnote▓▒░ echo $PATH
/home/coldin04/.nvm/versions/node/v21.1.0/bin:/usr/condabin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl
```

## Shell脚本的执行

Shell脚本的执行有两种方式，一种是直接执行，一种是通过`bash`命令执行。

### 直接执行

直接执行的方式是通过`./`来执行，比如我们有一个脚本文件`hello.sh`，那么我们可以通过`./hello.sh`来执行这个脚本。
```bash
chmod +x hello.sh
./hello.sh
```

### 通过bash命令执行

通过bash命令执行的方式是通过`bash`命令来执行，比如我们有一个脚本文件`hello.sh`，那么我们可以通过`bash hello.sh`来执行这个脚本。
```bash
bash hello.sh
```

<br>

## 参考资料

[菜鸟教程](https://www.runoob.com/linux/linux-shell.html)
[鸟哥私房菜](https://linux.vbird.org/linux_basic/centos7/0340bashshell-scripts.php)


[^1]: 来自[菜鸟教程](https://www.runoob.com/linux/linux-shell.html)
[^2]: 来自[鸟哥私房菜](https://linux.vbird.org/linux_basic/centos7/0340bashshell-scripts.php)