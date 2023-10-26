---
title: CHECK 约束
order: 3
---

::: warning
注意，这些笔记来此于库存，部分内容可能已经过时或因为某些原因导致排版错误而无法保证可靠性。如果你发现错误，欢迎提交 PR 或 邮件给`me@coldin.top`。我将不胜感激。
:::

# 创建新的检查约束
## 使用 SQL Server Management Studio

1. 在“对象资源管理器”中，展开要为其添加检查约束的表，右键单击“约束”，然后选择“新建约束” 。

2. 在“检查约束”对话框中，选择“表达式”字段，然后选择省略号 (…) 。

3. 在 **“CHECK 约束表达式”** 对话框中，键入 CHECK 约束的 SQL 表达式。 例如，若要将 `SellEndDate` 表的 `Product` 列中的条目限制为大于等于 `SellStartDate` 列中的日期的值，或者为 NULL 值，则键入：

```sql
SellEndDate >= SellStartDate OR SellEndDate IS NULL  
```

或者，如果要求 `zip` 列中的项为 5 位数，请键入：
```sql
zip LIKE '[0-9][0-9][0-9][0-9][0-9]'  
```
::: tip
确保将任何非数字约束值包含在单引号 (') 中。
:::

1. 选择“确定”。
2. 在“标识”类别中，您可以更改 CHECK 约束的名称并且为该约束添加说明（扩展属性）。
3. 在 **“表设计器”** 类别中，您可以设置何时强制约束。

|更改为：|**在以下字段中选择“是”：**|
|---|---|
|对在创建约束前存在的数据测试约束|**在创建或启用时检查现有数据**|
|在此表上发生复制操作时强制约束|**强制用于复制**|
|在此表中插入或更新行时强制约束|**强制用于 INSERT 和 UPDATE**|

7. 选择“关闭”。

[文档链接](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/create-check-constraints?view=sql-server-ver16#TsqlProcedure)

```sql
CREATE TABLE 学生信息
成绩 decimal(4,1) constraint CK_CJ check (成绩 between 0 and 100))
性别 char(2) constraint CK_XB check (性别='男' or 性别='女'),
```

## 使用 Transact-SQL

首先，创建约束。
```sql
ALTER TABLE dbo.DocExc   
   ADD ColumnD int NULL   
   CONSTRAINT CHK_ColumnD_DocExc   
   CHECK (ColumnD > 10 AND ColumnD < 50);  
GO  
```

若要测试约束，请先添加将传递检查约束的值。
```sql
INSERT INTO dbo.DocExc (ColumnD) VALUES (49);
```

接下来，尝试添加将使检查约束失败的值。
```sql
INSERT INTO dbo.DocExc (ColumnD) VALUES (55);  
```

```sql
alter table 学生信息 add constraint CK_CJ check (成绩 between 0 and 100)
go
alter table 学生信息 add constraint DF_XB default '男' for 性别,constraint CK_XB check (性别='男' or 性别='女')
```


### 删除检查约束
```sql
ALTER TABLE dbo.DocExc   
DROP CONSTRAINT CHK_ColumnD_DocExc;  
GO
```
