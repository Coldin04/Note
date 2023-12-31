---
title: 重定向和管道
order: 6
tag:
  - Shell
  - Linux
  - 重定向
  - 管道
---

## 重定向

### 什么是重定向

重定向是指改变命令的输入输出，使得命令的输入输出不再是默认的标准输入输出，而是指定的文件或者设备。

### 重定向的分类

重定向分为输入重定向和输出重定向。

输入重定向：
输入重定向是指改变命令的输入，使得命令的输入不再是默认的标准输入，而是指定的文件或者设备。

输出重定向：
输出重定向是指改变命令的输出，使得命令的输出不再是默认的标准输出，而是指定的文件或者设备。

### 重定向操作符

重定向操作符是用来指定重定向的方向和文件的。

* \>: 重定向 stdout 到文件，会覆盖已有文件的内容。
* \>\>: 重定向 stdout 到文件，追加到已有文件内容上。
* \<: 重定向 stdin 到文件。
* \>\&: 重定向 stdout 和 stderr 到文件。
* \<\&: 重定向 stdin 和 stdout 到文件。
* \>\>!: 重定向 stdout 到文件，会覆盖已有文件的内容，但是如果文件不存在，则创建文件。
* \>\>!\>: 重定向 stdout 到文件，追加到已有文件内容上，但是如果文件不存在，则创建文件。
* \>\&!: 重定向 stdout 和 stderr 到文件，但是如果文件不存在，则创建文件。
* \<\&!: 重定向 stdin 和 stdout 到文件，但是如果文件不存在，则创建文件。
* \>&-: 关闭 stdout。

### 重定向的使用

将ls命令的输出重定向到文件中：

```bash
ls > ls.txt
```

将ls命令的输出追加到文件中：

```Bash
ls >> ls.txt
```

## 管道
### 什么是管道

管道是指将一个命令的输出作为另一个命令的输入，这样就可以将多个命令连接起来，形成一个管道。

### 管道的使用

将ls命令的输出作为grep命令的输入：

```Bash
ls | grep "txt"
```

## 参考资料

1. [正则表达式-菜鸟教程](https://www.runoob.com/regexp/regexp-tutorial.html)