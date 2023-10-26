---
title: 外键约束
order: 5
---

# 使用Transact-SQL
```sql
CREATE TABLE Sales.TempSalesReason 
   (
      TempID int NOT NULL, Name nvarchar(50)
      , CONSTRAINT PK_TempSales PRIMARY KEY NONCLUSTERED (TempID)
      , CONSTRAINT FK_TempSales_SalesReason FOREIGN KEY (TempID)
        REFERENCES Sales.SalesReason (SalesReasonID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
   )
;
```
```sql
create table 成绩
(学号 char(7) constraint FK_XH foreign key references 学生信息 (学号) ,课程号 char(6) ,成绩 decimal(4,1)  constraint CK_CJ1 check (成绩 between 0 and 100) ,
constraint  PK_XH_KCH  primary key (学号,课程号))
go
```