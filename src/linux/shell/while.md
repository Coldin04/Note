---
title: Shell中的while循环和until循环
date: 2023-11-10
order: 7
---

## while循环

`while` 循环先判断循环条件是否满足，在条件满足时继续循环，条件不满足时退出循环。

### 语法

```bash
while condition //条件
do
    command //代码
done
```

如下，是一个简单的例子。当你输入`yes`时，跳出循环

```bash
#!/bin//bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
export PATH

while [ "$yn" != "yes" -a "$yn" != "YES" ]
do
  read -p "Please input yes/YES to stop this program: " yn
done

echo "OK!You input the correct answer."
```

这里还有一个例子，用来计算1到100的和

```bash
#!/bin/bash
export PATH

i=0
s=0

while [ "$i" != "100" ]
do
  i=$(($i+1))
  s=$(($s+$i))
done

echo "The result of '1+2+3+...+100' is ==> $s"
```

拓展：计算100到200的和

```bash
#!/bin/bash
export PATH

i=100
s=100

while [ "$i" != "200" ]
do
  i=$(($i+1))
  s=$(($s+$i))
done

echo "The result of '100+101+102+...+200' is ==> $s"
```

## until循环

`until` 循环和 `while` 循环的判断逻辑正好相反，当条件不满足时，继续循环，条件满足时退出循环。

### 语法

```bash
until condition //条件
do
    command //代码
done
```

如下，是一个简单的例子。当你输入`yes`时，跳出循环

```bash
#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
export PATH

until [ "$yn" == yes -o "$yn" == "YES" ]
do
  read -p "Please input yes/YES to stop this program:" yn
done
echo "OK!You input the correct answer."
```

这里还有一个例子，用来计算1到100的和

```bash
#!/bin/bash
export PATH

i=0
s=0

until [ "$i" == "100" ]
do
  i=$(($i+1))
  s=$(($s+$i))
done

echo "The result of '1+2+3+...+100' is ==> $s"
```

拓展：计算100到200的和

```bash
#!/bin/bash
export PATH

i=100
s=100

until [ "$i" == "200" ]
do
  i=$(($i+1))
  s=$(($s+$i))
done

echo "The result of '100+101+102+...+200' is ==> $s"
```

## 参考资料

[Shell脚本中循环语句for,while,until用法 ](https://www.cnblogs.com/yinfutao/p/9964070.html)
部分代码由 [Github Copilot](https://copilot.github.com/) 生成和改进。
