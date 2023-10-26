---
title: 创建和修改数据库
order: 1
date: 2023-6-09 8:37:00
---

# 创建数据库

## 使用 SQL Server Management Studio

[查看](https://learn.microsoft.com/zh-cn/sql/relational-databases/databases/create-a-database?view=sql-server-ver16#create-a-database-1)

### 创建数据库

1. 在 **“对象资源管理器”** 中，连接到 SQL Server 数据库引擎 的实例，然后展开该实例。
    
2. 右键单击“数据库”，然后选择“新建数据库” 。
    
3. 在 **“新建数据库”** 中，输入数据库名称。
    
4. 若要接受所有默认值来创建数据库，请选择“确定”；否则，请继续后面的可选步骤。
    
5. 若要更改所有者名称，请选择 (…) 来选择其他所有者。
    
     备注
    
    **始终选中“使用全文索引**”选项并变暗，因为从 SQL Server 2008 (10.0.x) 开始，所有用户数据库都启用了全文。
    
6. 若要更改主数据文件和事务日志文件的默认值，请在“数据库文件”网格中选择相应的单元，然后输入新值。 有关详细信息，请参阅 [向数据库中添加数据文件或日志文件](https://learn.microsoft.com/zh-cn/sql/relational-databases/databases/add-data-or-log-files-to-a-database?view=sql-server-ver16)。
    
7. 若要更改数据库的排序规则，请选择 **“选项”** 页，然后从列表中选择一个排序规则。
    
8. 若要更改恢复模式，请选择 **“选项”** 页，然后从列表中选择一个恢复模式。
    
9. 若要更改数据库选项，请选择 **“选项”** 页，然后修改数据库选项。 有关每个选项的说明，请参阅 [ALTER DATABASE SET Options (Transact-SQL)](https://learn.microsoft.com/zh-cn/sql/t-sql/statements/alter-database-transact-sql-set-options?view=sql-server-ver16) 。
    
10. 若要添加新的文件组，请选择“文件组”页。 选择“添加”，然后输入文件组的值。
    
11. 若要将扩展属性添加到数据库中，请选择 **“扩展属性”** 页。
    
    1. 在 **“名称”** 列中，输入扩展属性的名称。
        
    2. 在 **“值”** 列中，输入扩展属性文本。 例如，输入描述数据库的一个或多个语句。
        
12. 若要创建数据库，请选择“确定”。
    

[查看](https://learn.microsoft.com/zh-cn/sql/relational-databases/databases/create-a-database?view=sql-server-ver16#TsqlProcedure)


## 使用 Transact-SQL
### 创建数据库

`Sales_dat` 的第一个文件将成为主文件。 由于 `MB` 未在 文件的 参数`Sales_dat`中`SIZE`指定 或 `KB` ，因此它使用 `MB` 和 以兆字节为单位分配。 `Sales_log` 文件以 MB 为单位进行分配，因为 `SIZE` 参数中显式声明了 `MB` 后缀。
```sql
USE master;
GO

CREATE DATABASE 名称 ON
(NAME = Sales_dat,
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\saledat.mdf',
    SIZE = 10,
    MAXSIZE = 50,
    FILEGROWTH = 5) -- 主文件创建
LOG ON
(NAME = Sales_log,
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\salelog.ldf',
    SIZE = 5 MB,
    MAXSIZE = 25 MB,
    FILEGROWTH = 5 MB);   -- log文件创建
GO
--可以多添加几个文件  次要文件后缀名`ndf`
```

示例代码
[[SQL Server 操作代码#创建第一个数据库]]

### 向数据库添加数据文件或日志文件
将以下示例复制并粘贴到查询窗口中，然后单击“执行” 。 此实例向数据库添加由两个文件组成的文件组。 此示例在 `Test1FG1` 数据库中创建文件组 `AdventureWorks2022` ，然后将两个 5MB 的文件添加到该文件组。
```sql
USE master
GO
ALTER DATABASE AdventureWorks2012
ADD FILEGROUP Test1FG1;
GO
ALTER DATABASE AdventureWorks2012 
ADD FILE 
(
    NAME = test1dat3,
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\t1dat3.ndf',
    SIZE = 5MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB
),
(
    NAME = test1dat4,
    FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL10_50.MSSQLSERVER\MSSQL\DATA\t1dat4.ndf',
    SIZE = 5MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB
)
TO FILEGROUP Test1FG1;
GO
```
