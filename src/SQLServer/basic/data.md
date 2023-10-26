---
title: 管理表中的数据
order: 4
---

# 添加数据到表
## INSERT (Transact-SQL)

### 基本语法
[官方文档](https://learn.microsoft.com/zh-cn/sql/t-sql/statements/insert-transact-sql?view=sql-server-ver16#BasicSyntax)

### 插入单行数据
下面的示例在 AdventureWorks2022 数据库的 `Production.UnitMeasure` 表中插入一行。 该表中的各列是 `UnitMeasureCode`、`Name` 和 `ModifiedDate`。 由于提供了所有列的值并按表中各列的顺序列出这些值，因此不必在列列表中指定列名**。
```sql
INSERT INTO Production.UnitMeasure  
VALUES (N'FT', N'Feet', '20080414');
```

### 插入多行数据
下面的示例使用[表值构造函数](https://learn.microsoft.com/zh-cn/sql/t-sql/queries/table-value-constructor-transact-sql?view=sql-server-ver16)在单个 INSERT 语句中将三行插入 AdventureWorks2022 数据库的 `Production.UnitMeasure` 表。 由于提供了所有列的值并按表中各列的顺序列出这些值，因此不必在列列表中指定列名。
```sql
INSERT INTO Production.UnitMeasure  
 (N'FT2', N'Square Feet ', '20080923'), (N'Y', N'Yards', '20080923')
    , (N'Y3', N'Cubic Yards', '20080923');
```

>补充：老师例题按照如下方式插入：
```sql
insert into 学生信息 (学号,姓名,性别,成绩)
select '0711004','阿四','男',11.00
union
select '0711005','葡萄树','女',66.00
```

### 插入其他表数据
```sql
/*批量插入*/
insert into 学生信息 (学号,姓名,性别,成绩)
select 学号.姓名,性别,学分 from xsgl.dbo 学生 where 学分 >= 20
go
```
注：官方文档对此部分解释较为复杂，故此段略写。

从名为"学生信息"的表中选择性别为男性的学生的学号、姓名和成绩，并将这些信息插入到名为"学生信息1"的表中:
```sql
/*表的复制*/
select 学号,姓名,成绩 into 学生信息1 from 学生信息 where 性别='男'
```


# 更新数据表

## 更新用户定义类型列
`UPDATE 表名 SET 列名=表达式 [WHERE 条件]`
以下示例显示如何通过从字符串显式转换来更新用户定义类型 `Point` 的列中的值。
```sql
UPDATE Cities  
SET Location = CONVERT(Point, '12.3:46.2')  
WHERE Name = 'Anchorage';
```

上课实例：[[SQL Server 操作代码#更新和删除数据表：]]
```sql
USE 学生信息
go
UPDATE 学生 SET 学分=学分*1.2 WHERE 性别='男'
go
UPDATE 学生 SET 籍贯='合肥' WHERE 姓名='吴林'
go
UPDATE 成绩 SET 成绩=成绩-5 WHERE 课程号='100000'
go
```

以下示例使用 WHERE 子句指定要更新的行。 该语句对于 `Color` 列中已具有值“Red”且在以“Road-250”开头的 `Production.Product` 列中具有值的所有行更新 `Color` 表中 `Name` 列的值。
```sql
USE AdventureWorks2012;  
GO  
UPDATE Production.Product  
SET Color = N'Metallic Red'  
WHERE Name LIKE N'Road-250%' AND Color = N'Red';  
GO
```

# 删除列/行

## 使用不带 WHERE 子句的 DELETE

以下示例从 AdventureWorks2022 数据库的 `ProductCostHistory` 表中删除 `StandardCost` 列的值大于 `1000.00` 的所有行。
```sql
DELETE FROM Production.ProductCostHistory  
WHERE StandardCost > 1000.00;  
GO
```

下面的示例演示一个更复杂的 WHERE 子句。 WHERE 子句定义要确定删除的行而必须满足的两个条件。 `StandardCost` 列中的值必须介于 `12.00` 与 `14.00` 之间，而 `SellEndDate` 列中的值必须为 Null。 该示例还将打印 **@@ROWCOUNT** 函数中的值，以返回已删除的行数。
```sql
DELETE Production.ProductCostHistory  
WHERE StandardCost BETWEEN 12.00 AND 14.00  
      AND EndDate IS NULL;  
PRINT 'Number of rows deleted is ' + CAST(@@ROWCOUNT as char(3));
```

```sql
DELETE FROM 学生 WHERE 班级代号='2008001'
go
DELETE FROM 学生 WHERE 学分<20
go
```
