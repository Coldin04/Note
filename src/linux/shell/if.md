---
title: 在bash中使用if...else...fi进行判断
order: 6
tag:
  - Shell
  - Linux
  - 对话式脚本
  - if
  - 判断
  - fi
---

几乎所有的编程语言都有判断语句，bash也不例外。bash中的判断语句为`if...else...fi`。通过判断，我们可以很方便的实现一个程序的多分支，从而能更好的胜任复杂的任务。

## if...else...fi语法

`if...else...fi`语法如下：

```bash
if condition
then
    command1
    command2
    ...
    commandN
fi
```

如果需要在一个if中实现多个条件判断，可以使用`&&`和`||`进行连接，其中`&&`表示`and`，`||`表示`or`。

因此，上一小结中的判断`y/n`例子可以改写为：

```bash
#!/bin/bash
read -p "请输入(y/n):" yn
if [ "$yn" == "y" ] || [ "$yn" == "Y" ]; then
    echo "OK, continue"
    exit 0
fi
if [ "$yn" == "n" ] || [ "$yn" == "N" ]; then
    echo "Oh, interrupt!"
    exit 0
fi
echo "I don't know what your choice is" && exit 0
```

## 多分支判断

在实际的脚本编写中，我们可能需要实现多分支的判断。这时，我们可以使用`elif`关键字。

`elif`关键字的语法如下：

```bash
if condition1
then
    command1
    command2
    ...
    commandN
elif condition2
then
    command1
    command2
    ...
    commandN
else
    command1
    command2
    ...
    commandN
fi
```

这样，就可以很方便的实现多分支判断了。

## 举例：根据分数判断等级

下面是一个根据分数判断等级的例子：

```bash
#!/bin/bash
read -p "请输入分数：" grade
if ! [[ "$grade" =~ ^[0-9]+$ ]] || [ "$grade" -lt "0" ] || [ "$grade" -gt "100" ]; then
  echo "输入错误，请输入0-100之间的数字"
else
  if [ "$grade" == "100" ]; then
    echo "满分"
  elif [ "$grade" -ge "90" ]; then
    echo "优秀"
  elif [ "$grade" -ge "80" ]; then
    echo "良好"
  elif [ "$grade" -ge "60" ]; then
    echo "及格"
  else
    echo "不及格"
  fi
fi
```

## 参考资料

部分代码由 [Github Copilot](https://copilot.github.com/) 生成和改进。