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

## 参考资料

[Shell脚本中循环语句for,while,until用法 ](https://www.cnblogs.com/yinfutao/p/9964070.html)

