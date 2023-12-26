---
title: Shell Script中的for循环
order: 8
tag:
  - shell
  - linux
  - for
---

## for循环
for循环是Shell中最常用的循环语句，它的一般格式为：
```shell
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
```
其中`var`是变量名，`item`是列表，`command`是循环体，`do`和`done`是关键字。

## for...do...done(列表循环)

这里有一个简单的例子，每一行会输出一些动物的名字：
```shell
#!/bin/bash
for animal in dog cat elephant
do
    echo "There are ${animal}s..."
done
```
让我们想像另外一种状况，由于系统上面的各种帐号都是写在 /etc/passwd 内的第一个栏位，通过管线命令的 cut 捉出单纯的帐号名称后，以 id 分别检查使用者的识别码与特殊参数呢？由于不同的 Linux 系统上面的帐号都不一样！此时实际去捉 /etc/passwd 并使用循环处理，如下：

```shell
#!/bin/bash
for username in `cat /etc/passwd | cut -f1 -d":"`
do
    id $username
    finger $username
done
```
也可以通过循环来处理一些特殊的文件，例如，我们可以使用循环来处理 /proc 目录下的所有文件，如下：
```shell
#!/bin/bash
for file in /proc/*
do
    if [ -d "$file" ]
    then
        echo "$file is a directory"
    elif [ -f "$file" ]
    then
        echo "$file is a file"
    fi
done
```
这里的`-d`和`-f`是`test`命令的参数，用来判断是否是目录或者文件。

最后一个例子，让我们来用循环找出目录内的文件权限，如下：
```shell
#!/bin/bash

read -p "Enter a directory: " dir
if [ -z "$dir" ]
then
    echo "You enter nothing."
    exit 1
elif [ ! -d "$dir" ]
then
    echo "$dir is not a directory."
    exit 1
fi

filelist=`ls $dir`
for filename in $filelist
do
    perm=""
    test -r "$dir/$filename" && perm="$perm readable"
    test -w "$dir/$filename" && perm="$perm writable"
    test -x "$dir/$filename" && perm="$perm executable"
    echo "The file $dir/$filename's permission is $perm"
done
```
这里的`-r`、`-w`和`-x`也是`test`命令的参数，用来判断是否可读、可写和可执行。


## for...do...done(计数循环)

在Shell中，for循环还有另外一种形式，它的一般格式为：
```shell
for ((初始值; 判断条件; 步长))
do
    command1
    command2
    ...
    commandN
done
```
这里的`((...))`是Shell中的算术表达式，`初始值`、`判断条件`和`步长`都是算术表达式，`command`是循环体，`do`和`done`是关键字。

这里有一个简单的例子，每一行会输出一个数字：
```shell
#!/bin/bash
for ((i=1; i<=10; i++))
do
    echo $i
done
```
这里的`i=1`是初始值，`i<=10`是判断条件，`i++`是步长。


## 参考资料

- [鸟哥的Linux私房菜](https://linux.vbird.org/linux_basic/centos7/0340bashshell-scripts.php#for)
- [Github Copilot](https://copilot.github.com/)