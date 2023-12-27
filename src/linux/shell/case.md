---
title: Shell Script中的case语句判断
order: 8
tag:
  - shell
  - linux
  - case
  - 判断
  - 对话式脚本
  - case
---

## case语句

case语句是一种多分支选择结构，它可以用来匹配一个值与一个模式，如果匹配成功，就执行相应的命令。case语句的一般格式如下：

```shell
case 值 in
模式1)
    command1
    command2
    ...
    commandN
    ;;
模式2)
    command1
    command2
    ...
    commandN
    ;;
*)
    command1
    command2
    ...
    commandN
    ;;
esac
``` 

其中，`command`是命令，`;;`是分隔符，`*`是通配符，`esac`是`case`的反写。

不妨举个例子看下`case`语句的用法：

```shell
#!/bin/bash
case $1 in
"hello")
    echo "Hello, how are you?"
    ;;
"")
    echo "You MUST input parameters, ex> {$0 someword}"
    ;;
*)  
    echo "Usage $0 {hello}"
    ;;
esac
```
这个例子中，我们使用`case`语句来判断用户输入的参数，如果输入的是`hello`，则输出`Hello, how are you?`，如果输入的是空，则输出`You MUST input parameters, ex> {$0 someword}`，如果输入的是其他的，则输出`Usage $0 {hello}`。

这个例子貌似没有体现`case`语句的优势，但是如果我们需要判断的条件很多，那么使用`case`语句就会比较方便，例如：

```shell
#!/bin/bash

echo "This program will print your selection !"
case $1 in
"one")
    echo "Your choice is ONE"
    ;;
"two")
    echo "Your choice is TWO"
    ;;
"three")
    echo "Your choice is THREE"
    ;;
*)  
    echo "Usage $0 {one|two|three}"
    ;;
esac
```

这个例子中，我们使用`case`语句来判断用户输入的参数，如果输入的是`one`，则输出`Your choice is ONE`，如果输入的是`two`，则输出`Your choice is TWO`，如果输入的是`three`，则输出`Your choice is THREE`，如果输入的是其他的，则输出`Usage $0 {one|two|three}`。

下面是一个根据分数判断等级的例子：
```bash
#!/bin/bash
read -p "请输入分数：" grade
case $grade in
100|99|98|97|96|95|94|93|92|91|90)
    echo "A"
    ;;
89|88|87|86|85|84|83|82|81|80)
    echo "B"
    ;;
79|78|77|76|75|74|73|72|71|70)
    echo "C"
    ;;
69|68|67|66|65|64|63|62|61|60)
    echo "D"
    ;;
*)
    echo "E"
    ;;
esac
```

## 参考资料
[鸟哥的Linux私房菜](https://linux.vbird.org/linux_basic/centos7/0340bashshell-scripts.php#case)
部分内容由Github Copilot辅助编写