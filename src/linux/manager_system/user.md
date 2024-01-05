---
title: Linux中的用户和用户组（以CentOS 7为例）
order: 1
tag:
  - Linux
  - CentOS
  - 用户
  - 用户组
  - 管理
  - 增加
---

## 用户和用户组

Linux是一个多用户的操作系统，这就意味着在Linux系统中可以有多个用户同时登录并使用系统资源。为了保证系统的安全性，Linux系统对用户进行了权限管理，每个用户只能访问自己的资源，不能访问其他用户的资源。

Linux系统中的用户分为两种：**系统用户**和**普通用户**。系统用户是系统为了管理系统而创建的用户，普通用户是系统用户创建的用户。系统用户的UID（用户ID）从0开始，普通用户的UID从500开始。

::: tip 提示
Linux系统即使个人使用，也应该使用普通用户登录，而不是使用系统用户登录。使用系统用户登录，可能会因为误操作而导致系统崩溃。而使用普通用户登录，即使误操作，也只会影响到当前用户，不会影响到其他用户。
:::

虚拟用户是Linux系统中的一种特殊用户，它们不是真实存在的用户，而是为了满足某些特殊需求而创建的用户。虚拟用户的UID从1开始。

## 用户账户文件

Linux系统中的用户账户信息保存在`/etc/passwd`文件中，该文件的每一行对应一个用户账户，每一行又被分为7个字段，字段之间使用冒号（`:`）分隔。这7个字段分别是：
`用户名：口令：UID：GID：用户描述信息：主目录：登录Shell`

在大部分情况下，我们只需要关注用户名、UID、GID、用户描述信息、主目录和登录Shell这6个字段。有时候，你可能并不需要考虑补全这6个字段，只需要考虑用户名和UID就可以了。

在`/etc/shadow`文件中保存着用户的密码信息，该文件的每一行对应一个用户账户，每一行又被分为9个字段，字段之间使用冒号（`:`）分隔。这9个字段分别是：
`用户名：加密口令：最后一次修改时间：最小时间间隔：最大时间间隔：警告时间：不活动时间：失效时间：标志`

在大部分情况下，我们只需要关注用户名和加密口令这2个字段。有时候，你可能并不需要考虑补全这2个字段，只需要考虑用户名就可以了。

在`/etc/login.defs`文件中保存着用户账户的默认值，该文件的每一行对应一个用户账户的默认值，每一行又被分为2个字段，字段之间使用空格分隔。这2个字段分别是：
`字段名：字段值`

建立用户时，该配置文件中的字段值将作为用户账户的默认值。如果你不想使用默认值，可以在建立用户时指定字段值。

## 用户组文件

组账户的信息保存在`/etc/group`文件中，该文件的每一行对应一个组账户，每一行又被分为4个字段，字段之间使用冒号（`:`）分隔。这4个字段分别是：
`组名：口令：GID：组内用户列表`

group文件内容示例：
```bash
root:x:0:
bin:x:1:bin,daemon
daemon:x:2:daemon
sys:x:3:sys,adm
```

## 管理用户
### 新建用户

使用`useradd`命令新建用户，该命令的语法格式如下：
```bash
useradd [选项] 用户名
```

`useradd`命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -c | 指定用户描述信息 |
| -d | 指定用户主目录 |
| -g | 指定用户所属的主组 |
| -G | 指定用户所属的附加组 |
| -m | 创建用户主目录 |
| -M | 不创建用户主目录 |
| -s | 指定用户登录Shell |
| -u | 指定用户UID |

这里不妨举个例子，创建一个名为`test`的用户，该用户的UID为1000，主组为`test`，附加组为`test`和`root`，用户描述信息为`test user`，主目录为`/home/test`，登录Shell为`/bin/bash`，则可以使用如下命令：
```bash
useradd -u 1000 -g test -G test,root -c "test user" -d /home/test -s /bin/bash test
```

如果新建用户已存在，则系统会提示用户已存在，如下所示：
```bash
[root@localhost ~]# useradd test
useradd: user 'test' already exists
```

### 设置用户密码

使用`passwd`命令设置用户密码，该命令的语法格式如下：
```bash
passwd [选项] 用户名
```

`passwd`命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -d | 删除用户密码 |
| -l | 锁定用户密码 |
| -u | 解锁用户密码 |
| -S | 显示用户密码状态 |
| -f | 用户下次登录时必须修改密码 |
| -n | 指定密码最短使用时间 |
| -x | 指定密码最长使用时间 |
| -w | 指定密码过期前的警告时间 |
| -i | 指定密码过期后的宽限时间 |

这里不妨举个例子，设置`test`用户的密码为`123456`，则可以使用如下命令：
```bash
passwd test
```

chage命令可以设置用户密码的最短使用时间、最长使用时间、过期前的警告时间和过期后的宽限时间，该命令的语法格式如下：
```bash
chage [选项] 用户名
```

chage命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -l | 显示用户密码的详细信息 |
| -m | 指定密码最短使用时间 |
| -M | 指定密码最长使用时间 |
| -W | 指定密码过期前的警告时间 |
| -I | 指定密码过期后的宽限时间 |
| -E | 指定密码过期时间 |
| -d | 设置上一次修改密码的日期 |

这里不妨举个例子，设置`test`用户的密码最短使用时间为1天，最长使用时间为30天，过期前的警告时间为7天，过期后的宽限时间为7天，上一次修改密码的日期为2020年1月1日，则可以使用如下命令：
```bash
chage -m 1 -M 30 -W 7 -I 7 -d 2020-01-01 test
```

### 修改用户

使用`usermod`命令修改用户，该命令的语法格式如下：
```bash
usermod [选项] 用户名
```

`usermod`命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -c | 指定用户描述信息 |
| -d | 指定用户主目录 |
| -g | 指定用户所属的主组 |
| -G | 指定用户所属的附加组 |
| -m | 创建用户主目录 |
| -M | 不创建用户主目录 |
| -s | 指定用户登录Shell |
| -u | 指定用户UID |

这里不妨举个例子,将`test`用户的的主目录修改为`/home/test1`，启动`test`用户的登录Shell为`/bin/zsh`，则可以使用如下命令：
```bash
usermod -d /home/test1 -s /bin/zsh test
usermod -d /home/test -s /bin/bash test
```

有时需要禁用用户，可以使用`usermod`命令的`-L`选项，或`passwd`命令的`-l`选项，该选项可以锁定用户，锁定用户后，用户将无法登录系统，查看`/etc/shadow`文件，可以发现该用户的密码字段被修改为`!!`，如下所示：
```bash
[root@localhost ~]# usermod -L test
[root@localhost ~]# cat /etc/shadow | grep test
test:!!:18600:0:99999:7:::
```

如果想解锁用户，可以使用`usermod`命令的`-U`选项，该选项可以解锁用户，解锁用户后，用户将可以登录系统，查看`/etc/shadow`文件，可以发现该用户的密码字段被修改为`*`，如下所示：
```bash
[root@localhost ~]# usermod -U test
[root@localhost ~]# cat /etc/shadow | grep test
test:*:18600:0:99999:7:::
```

如果只是希望禁用用户登录，则可以使用`usermod`命令的`-s`选项，该选项可以指定用户登录Shell，如果指定的Shell不存在，则用户将无法登录系统，查看`/etc/shadow`文件，可以发现该用户的密码字段被修改为`*`，如下所示：
```bash
[root@localhost ~]# usermod -s /sbin/nologin test
[root@localhost ~]# cat /etc/shadow | grep test
test:*:18600:0:99999:7:::
```

如果想解锁用户，可以使用`usermod`命令的`-s`选项，该选项可以指定用户登录Shell。

### 删除用户
要删除用户，可以使用`userdel`命令，该命令的语法格式如下：
```bash
userdel [选项] 用户名
```
如果不指定`-r`选项，则用户的主目录不会被删除，如果指定`-r`选项，则用户的主目录也会被删除。

这里不妨举个例子，删除`test`用户，不删除用户的主目录，则可以使用如下命令：
```bash
userdel test
```

如果想删除用户的主目录，可以使用如下命令：
```bash
userdel -r test
```

## 管理用户组
### 新建用户组

使用`groupadd`命令新建用户组，该命令的语法格式如下：
```bash
groupadd [选项] 用户组名
```

`groupadd`命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -g | 指定用户组的GID |
| -r | 创建系统用户组 |

### 删除用户组
要删除一个组，可以使用`groupdel`命令，该命令的语法格式如下：
```bash
groupdel 用户组名
```
值得注意的是，如果要删除的组中还有用户，那么该组将无法被删除。

修改用户组的信息，可以使用`groupmod`命令，该命令的语法格式如下：
```bash
groupmod [选项] 用户组名
```
### 修改用户组
`groupmod`命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -g | 指定用户组的GID |
| -n | 指定用户组的新名称 |
| -o | 允许使用非唯一的GID |

### 为组添加用户
使用`gpasswd`命令为组添加用户，该命令的语法格式如下：
```bash
gpasswd [选项] [用户] [组名]
```

`gpasswd`命令的常用选项如下：
| 选项 | 说明 |
| --- | --- |
| -a | 将用户添加到组中 |
| -d | 将用户从组中删除 |
| -A | 指定组的管理员 |
| -M | 指定组的成员 |
| -r | 删除组的密码 |

这里不妨举个例子，将`test`用户添加到`test`组中，则可以使用如下命令：
```bash
gpasswd -a test test
```

### 常见的账号管理命令

| 命令 | 说明 |
| --- | --- |
| vipw | 编辑`/etc/passwd`文件，默认使用vi，在编辑`/etc/passwd`文件时，系统会锁定该文件，直到编辑完成 |
| vigr | 编辑`/etc/group`文件，默认使用vi，在编辑`/etc/group`文件时，系统会锁定该文件，直到编辑完成 |
| pwck | 检查`/etc/passwd`文件和`/etc/shadow`文件的格式是否正确 |
| grpck | 检查`/etc/group`文件的格式是否正确 |
| chfn | 修改用户描述信息 |
| chsh | 修改用户登录Shell |
| chage | 修改用户密码的最短使用时间、最长使用时间、过期前的警告时间和过期后的宽限时间 |
| chpasswd | 批量修改用户密码 |
| chgpasswd | 批量修改用户密码 |
| id | 查看用户的UID、GID和所属的组 |
| groups | 查看用户所属的组 |
| whoami | 查看当前用户的用户名 |
| logname | 查看当前用户的用户名 |
| su | 切换用户 |
| sudo | 以其他用户的身份执行命令 |
| newgrp | 切换用户组 |
| sg | 以其他用户组的身份执行命令 |
| w | 查看当前登录系统的用户 |

## 拓展:批量创建用户

可以使用下面的脚本来创建示例：
```bash
#!/bin/bash
export PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin

if [ ! -f account.txt ]; then
    echo "account.txt不存在"
    exit 1
fi
usernames=$(cat account.txt | awk '{print $1}')
for username in $usernames
do
  useradd $username
  echo $username | passwd --stdin $username
  chage -d 0 $username
done
```
接下来，我们创建一个`account.txt`文件，该文件的内容如下：
```bash
test1 123456
test2 123456
test3 123456
```

然后，我们执行上面的脚本，即可批量创建用户。

## 参考资料

- [鸟哥的Linux私房菜](http://linux.vbird.org/)
- 部分由[Github Copilot](https://copilot.github.com/)生成