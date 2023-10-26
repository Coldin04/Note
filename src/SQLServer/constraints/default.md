---
title: 默认约束
order: 4
---

::: danger 重要！！！
后续版本的 Microsoft SQL Server 将删除该功能。 请避免在新的开发工作中使用该功能，并着手修改当前还在使用该功能的应用程序。 将改用默认值定义，这些默认值定义是使用 ALTER TABLE 或 CREATE TABLE 的 DEFAULT 关键字创建的/修改的。
:::

# 新表创建默认约束

```sql
CREATE DEFAULT [ schema_name . ] default_name   
AS constant_expression [ ; ]
```

上课例题[[SQL Server 操作代码#应用五种约束创建表]]
```sql
CREATE TABLE 学生信息
籍贯 varchar(10) constraint DF_JG default '合肥',
```

# 在现有表中创建
上课例题[[SQL Server 操作代码#通过ALTER添加约束]]
```sql
ALTER TABLE 学生信息 ADD CONSTRAINT DF_JG default '合肥' for 籍贯
go 
ALTER TABLE 学生信息 ADD CONSTRAINT DF_XB default '男' for 性别,CONSTRAINT CK_XB check (性别='男' or 性别='女')
```
