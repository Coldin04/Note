---
title: Shell Scripts的部分示例
order: 99
tag:
  - linux
  - shell
  - script
  - example
  - 示例
  - 脚本
---

## 简单的加减乘除:

```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

echo -e "Please input two numbers, I will cross them! \n"
read -p "first number: " firstnu
read -p "second number: " secnu
total=$(($firstnu*$secnu))
echo -e "\nThe result of $firstnu x $secnu is ==> $total"
```

## 利用随机判断式，判断用户输入的文件名类型：
  
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

# 1. 让用户输入文件名，并取得fileuser这个变量
echo -e "Please input a filename, I will check the filename's type and permission. \n\n"
read -p "Input a filename: " filename
test -z $filename && echo "You **MUST** input a filename. " && exit 0

# 2. 判断文件是否存在？若不存在则显示信息并结束脚本
test ! -e $filename && echo "The filename '$filename' DO NOT exist" && exit 0

# 3. 开始判断文件类型与属性
test -f $filename && filetype="regular file"
test -d $filename && filetype="directory"
test -r $filename && perm="readable"
test -w $filename && perm="$perm writeable"
test -x $filename && perm="$perm executable"

# 4. 开始输出信息!
ehco "The filename: $filename is a $filetype"
echo "And the permissions are: $perm"
```

在这个脚本中，`&&` 是逻辑与的意思，若前一个指令执行成功，则执行下一个指令，反之，若前一个指令执行失败，则后面的指令不再执行。

这个脚本同时判断了文件是否存在，文件类型，以及文件的权限。


## 简单的判断y和n的脚本：
使用`[]`判断实现：
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "Please input (Y/N): " yn
["$yn" == "Y" -o "$yn" == "y"] && echo "OK, continue" && exit 0
["$yn" == "N" -o "$yn" == "n"] && echo "Oh, interrupt!" && exit 0
echo "I don't know what your choice is" && exit 0
```

使用`if`判断实现：
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "Please input (Y/N): " yn

if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
  echo "OK, continue"
  exit 0
fi
if [ "$yn" == "N" ] || [ "$yn" == "n" ]; then
  echo "Oh, interrupt!"
  exit 0
fi
echo "I don't know what your choice is" && exit 0
```
对上面补充可实现：
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p "Please input (Y/N): " yn

if [ "$yn" == "Y" ] || [ "$yn" == "y" ]; then
  echo "OK, continue"
  exit 0
elif [ "$yn" == "N" ] || [ "$yn" == "n" ]; then
  echo "Oh, interrupt!"
  exit 0
else
  echo "I don't know what your choice is" && exit 0
fi
```
## 使用不定循环检测用户输入yes/no
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

while [ "$yn" != "yes" -a "$yn" != "YES" ]
do
  read -p "please input yes/YES to stop this program: " yn
done
echo "OK! you input the correct answer."
```

## 使用不定循环来计算1+2+3+...+100的和
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

s=0
i=0
while[ "$i" != "100" ]
do
  i=$(($i+1))
  s=$(($s+$i))
done
echo "The result of '1+2+3+...+100' is ==> $s"
```

## 输出动物名称的脚本
```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

for animals in dog cat elephant monkey
do
  echo "There are ${animals}s..."
done
```

## 利用for循环计算1+2+3+...+100的和

```bash
#!/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

read -p “请输入一个数字，我将从1开始加到它: " nu
s=0
for ((i=1; i<=$nu; i=i+1))
do
  s=$(($s+$i))
done

echo "The result of '1+2+3+...+$nu' is ==> $s"
```

