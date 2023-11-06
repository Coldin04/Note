---
title: 使用test进行简单的判断和进行数值比较
order: 5
tag:
  - Shell
  - Linux
  - test
  - 数值比较
  - 判断
---

## test命令

当需要检测系统上的某些条件是否成立时，就需要使用`test`命令。`test`命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。

`test`命令的格式为：

```shell
test expression
```

### 举例：判断文件是否存在

```shell
test -e filename
```

用脚本实现这个功能:
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

echo -e "Please input a filename, I will check the filename's type and permission. \n\n"
read -p "Input a filename: " filename
test -z $filename && echo "You MUST input a filename." && exit 0

test ! -e $filename && echo "The filename '$filename' DO NOT exist" && exit 0

test -f $filename && filetype="regular file"
test -d $filename && filetype="directory"
test -r $filename && perm="readable"
test -w $filename && perm="$perm writable"

# 开始输出信息
echo "The filename: $filename is a $filetype"
echo "And the permissions are: $perm"
```

这个脚本将依据用户输入的文件名，判断文件类型与属性，并输出相应的信息。
首先，我们使用`read`命令读取用户输入的文件名，然后使用`test`命令判断文件是否存在，如果不存在，则输出提示信息并退出脚本；如果存在，则继续判断文件类型与属性。

## 使用判断符号进行数值比较

除了使用`test`外，还可以使用`[]`进行数值比较。

使用`[]`需要注意的是，`[]`与`内容`之间必须有空格，否则会报错。

::: tip
`[]`与`内容`之间必须有空格，否则会报错。
在bash中，`=`和`==`是等价的，但一般写`==`，因为`=`在其他编程语言中是赋值符号。
:::

`[]`中的`-eq`表示等于，`-ne`表示不等于，`-gt`表示大于，`-lt`表示小于，`-ge`表示大于等于，`-le`表示小于等于。

### 举例：使用`[]`判断用户输入y/n

```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "Please input (Y/N): " yn
[ "$yn" == "Y" -o "$yn" == "y" ] && echo "OK, continue" && exit 0
[ "$yn" == "N" -o "$yn" == "n" ] && echo "Oh, interrupt!" && exit 0
echo "I don't know what your choice is" && exit 0
```