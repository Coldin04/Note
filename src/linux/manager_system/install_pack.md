---
title: Linux系统中安装与管理软件包
order: 3
tag:
  -dpkg
  -yum
  -rpm
  -apt
  -linux
  -centos
---

## 软件包

软件包是一种软件分发格式，它包含了软件的二进制文件、配置文件、文档文件等。软件包可以用来安装软件，也可以用来卸载软件。

在Linux系统中，每个人都可以创建软件包，但是软件包的格式必须符合Linux标准软件包规范（LSB）。

软件包的格式有很多种，其中最常用的是deb格式和rpm格式。deb格式是Debian系统的软件包格式，rpm格式是Red Hat系统的软件包格式。

一般来说，Linux的很多软件都开放了源代码，因此我们可以从源代码编译安装软件。但是，从源代码编译安装软件比较麻烦，而且容易出错。因此，我们一般都是从软件包安装软件。

## make与conifgure

使用类似gcc的编译器编译软件时，一般需要执行以下三个步骤：

1. 使用类似gcc的编译器编译源代码，生成可执行文件。
2. 使用类似make的工具将可执行文件和相关文件打包，生成软件包。
3. 使用类似dpkg的工具安装软件包，将软件包中的文件复制到系统中。

其中，第一步和第二步是编译软件，第三步是安装软件。

make是一个编译工具，它可以根据Makefile文件编译源代码，生成可执行文件。

conifgure是一个配置工具，它可以根据configure文件配置源代码，生成Makefile文件。

要编译软件，我们需要先使用configure工具配置源代码，然后再使用make工具编译源代码。

## dpkg 与 rpm

dpkg是Debian系统的软件包管理工具，它可以安装deb格式的软件包。

而rpm是Red Hat系统的软件包管理工具，它可以安装rpm格式的软件包。

一般来说，dpkg和rpm都存在依赖检查，因此在安装软件包时，如果软件包的依赖没有被满足，那么软件包就无法被安装。

## yum

为了方便管理软件包，Red Hat系统开发了yum工具，它可以自动解决软件包的依赖关系。

yum工具可以从yum源中下载软件包，也可以从rpm包中安装软件包。

通过yum工具安装软件包，软件包的维护者一般都会将软件包的依赖关系写入软件包的描述文件中，因此yum工具可以自动解决软件包的依赖关系。

从RHEL 8开始，Red Hat系统使用dnf工具替代了yum工具。

## 实践：

安装gcc:
  
```bash
[root@localhost ~]# yum install gcc
```
当然，在此之前，请确保你已经安装了yum工具并正确的配置了yum源。

不妨编写一个简单的C语言程序，然后使用gcc编译它：

```bash
[root@localhost ~]# vim hello.c
#include <stdio.h>
int main()
{
    printf("Hello World!\n");
    return 0;
}

[root@localhost ~]# gcc hello.c -o hello
[root@localhost ~]# ./Hello
Hello World!
```

显而易见，gcc编译器将源代码编译成了可执行文件。终端输出了“Hello World!”，说明程序运行成功。

## 使用make编译软件

在网络上有很多开源软件，我们可以从网络上下载它们的源代码，然后使用make工具编译它们。

一般来说网络上的开源软件都是使用configure工具配置的，因此我们可以直接使用make工具编译它们。

这里就省略不写了。

## 拓展：

在不同的Linux发行版中，软件包的管理工具不同，一般需要使用对应工具来管理软件包。

| 发行版 | 软件包管理工具 |
| --- | --- |
| Debian | dpkg |
| Ubuntu | dpkg |
| CentOS | rpm |
| Red Hat | rpm |
| Fedora | rpm |
| openSUSE | rpm |
| Arch Linux | pacman |

## 参考资料
- [《Linux操作系统及应用》]
- 文章编写时，部分提示来自[Github Copilot]
