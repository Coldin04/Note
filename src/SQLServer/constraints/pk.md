---
title: 主键约束
order: 1
---
表通常具有包含唯一标识表中每一行的值的一列或一组列。 这样的一列或多列称为表的主键 (PK)，用于强制表的实体完整性。 由于主键约束可保证数据的唯一性，因此经常对标识列定义这种约束。

# 在新表中创建主键
下面的示例创建一个表，并对 AdventureWorks 数据库中的 `TransactionID` 列定义主键。
```sql
CREATE TABLE Production.TransactionHistoryArchive1
   (
      TransactionID int IDENTITY (1,1) NOT NULL
      , CONSTRAINT PK_TransactionHistoryArchive1_TransactionID PRIMARY KEY CLUSTERED (TransactionID)
   )
;
```

上课代码：[[SQL Server 操作代码#应用五种约束创建表]]
```sql
CREATE TABLE 学生信息
(学号 char(7) constraint PK_XH PRIMARY KEY,constraint CK_XH check (学号 like '[0-9][0-9][0-9][0-9]')
 ```

# 在现有表中创建主键

下面的示例对 AdventureWorks 数据库中的 `TransactionID` 列创建主键。
```sql
ALTER TABLE Production.TransactionHistoryArchive
   ADD CONSTRAINT PK_TransactionHistoryArchive_TransactionID PRIMARY KEY CLUSTERED (TransactionID);
```

```sql
ALTER TABLE 学生信息 ADD CONSTRAINT PK_XH primary key (学号)
GO
```
