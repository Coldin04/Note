---
title: 唯一约束
order: 2
---

# 创建唯一约束
该示例将创建表 `TransactionHistoryArchive4` ，并且在列 `TransactionID`上创建唯一约束。
```sql
USE AdventureWorks2012;  
GO  
CREATE TABLE Production.TransactionHistoryArchive4  
 (  
   TransactionID int NOT NULL,   
   CONSTRAINT AK_TransactionID UNIQUE(TransactionID)   
);   
GO
```
UNIQUE 约束允许 NULL 值，这一点与 PRIMARY KEY 约束不同。 不过，当与参与 UNIQUE 约束的任何值一起使用时，每列只允许一个空值。 FOREIGN KEY 约束可以引用 UNIQUE 约束。

上课例题[[SQL Server 操作代码#应用五种约束创建表]]
```sql
CREATE TABLE 学生信息
身份证号 char(18) constraint UQ_SFZH unique,
手机号码 char(11) constraint UQ_SJHM unique;
go 
```

# 在现有表中创建唯一约束

该示例在表 `PasswordHash` 中的 `PasswordSalt` 和 `Person.Password`列上创建唯一约束。
```sql
USE AdventureWorks2012;   
GO  
ALTER TABLE Person.Password   
ADD CONSTRAINT AK_Password UNIQUE (PasswordHash, PasswordSalt);   
GO
```

```sql
ALTER TABLE 学生信息 ADD CONSTRAINT UQ_SFZH unique (身份证号),constraint UQ_SJHM unique (手机号码)
```

