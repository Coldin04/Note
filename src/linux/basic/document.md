---
title: Linux下的文件和文件夹管理
order: 2
tag:
    - ls
    - cd
    - linux
---

## ls

Linux ls（英文全拼： list directory contents）命令用于显示指定工作目录下之内容（列出目前工作目录所含的文件及子目录)。

参数：
-a 列出所有文件（包括隐藏文件）
-t 按照最后修改时间排序
-F 列出当前目录下的文件名和类型
-l 列出当前目录下的所有文件的权限、所有者、文件大小、修改时间和名称
-lg 列出参数`l`中的条目和所有者的工作组
-R 显示出目录下及其子目录的文件名

## cat
cat（英文全拼：concatenate）命令用于连接文件并打印到标准输出设备上。

参数：
-b  对文件中的非空行标注行号
-n  对输出内容所有行标注行号


## echo 
Shell 的 echo 指令与 PHP 的 echo 指令类似，都是用于字符串的输出。命令格式：
```bash
echo string
```

显示变量： `echo "$name It is a test"`

## more
`more`命令和`cat`类似，但`more`提供了更方便的逐页阅读的方式。

具体操作：
按Q退出，空格下一页，回车下一行
more -[数字] [filename]   查看文件的前[数字]行
more +[数字] [filename]   从文件的第[数字]行开始查看

## less
`less`是`more`的改进版，可以向上翻，也可以光标定位

可以用`b`键向上翻一页，也可以用`/`查找，并且可以使用方向键

## head和tail
```
head -n 5 /etc/password 从上面开始显示5行
tail -n 5 /etc/password 从下面开始显示5行
head -c 20 /etc/password 从头开始显示20个字符
```

## mkdir
这条命令一般用于创建新的文件夹。

一般`mkdir 文件夹名`和`mkdir 绝对路径`

## rmdir
用于删除空目录，使用较少

## cp
复制命令，可以复制文件和文件夹
```bash
cp [参数] 源文件 目标文件
```

参数：
-a    尽可能保持文件状态、权限等属性原样复制
-f    如果目录存在，先删除他们再复制，且不提示用户
-i    如果目标目录或文件存在，提示是否覆盖已有文件。
-R    递归复制目录，即包含目录下的各级子目录
-d    若文件为链接属性，复制连接而不复制自身
-p    连同文件属性复制过去，而不使用预制属性
-r    递归持续复制，用于目录的复制行为
-s    复制成为符号链接文件
-u    若destination比source旧才更新

## mv
移动文件
```
mv [源文件] [移动后的目录]
```

## rm
删除文件和文件夹，用处较多
```bash
rm [参数] [文件名]
```

参数：
-r    删除目录
-f    强制删除
-i    删除时提示用户

:::danger
`rm -rf /`或`rm -rf /*`是危险操作！请不要随意使用！
:::

## touch
创建文件/修改文件时间
```bash
touchu [参数] [文件名]
```
可通过输入多个文件名连续创建多个文件。

## diff 
```
diff [a文件] [b文件]  比较 a文件 和 b文件
```

## ln
链接文件
```
ln [a文件] [b文件]
```
默认创建硬链接，参数`-s`可创建软链接

## gzip

压缩命令
```
gzip -v [文件名]
```

## tar
打包文件
```
tar -cvf yy.tar [a文件] [t文件]   打包文件
tar -xvf yy.tar        解压文件
tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz
tar -tzvf test.tar.gz      列出压缩文件内容
tar -xzvf test.tar.gz      解压文件内容
```


## grep

```
grep -2 root /etc/password     查找password中包含root的行，并显示其及前后两行想
```

## whereis
查找目录
```
whereis [参数] 命令名称
```