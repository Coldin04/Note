---
title: 视图和存储过程
order: 2
---
视图是一个虚拟表，其内容由查询定义。 同表一样，视图包含一系列带有名称的列和行数据。 视图在数据库中并不是以数据值存储集形式存在，除非是索引视图。 行和列数据来自由定义视图的查询所引用的表，并且在引用视图时动态生成。

## 使用 SQL Server Management Studio创建

1. 在 **“对象资源管理器”**中，展开要创建新视图的数据库。
    
2. 右键单击“ **视图** ”文件夹，然后选择“ **新建视图...”**。
    
3. 在 **“添加表”** 对话框中，从以下选项卡之一选择要在新视图中包含的元素：“表”、“视图”、“函数”和“同义词”。
    
4. 选择“ **添加**”，然后选择“ **关闭**”。
    
5. 在 **“关系图窗格”**中，选择要在新视图中包含的列或其他元素。
    
6. 在 **“条件窗格”**中，选择列的其他排序或筛选条件。
    
7. 在“ **文件** ”菜单上，选择“ **保存 _视图名称_**”。
    
8. 在“ **选择名称** ”对话框中，输入新视图的名称，然后选择“ **确定**”。
    
    有关查询和视图设计器的详细信息，请参阅 [查询和视图设计器工具 (Visual Database Tools)](https://learn.microsoft.com/zh-cn/sql/ssms/visual-db-tools/query-and-view-designer-tools-visual-database-tools?view=sql-server-ver16) 。

[官方文档](https://learn.microsoft.com/zh-cn/sql/relational-databases/views/create-views?view=sql-server-ver16#TsqlProcedure)

## 使用 Transact-SQL创建

```sql
USE AdventureWorks2022;
GO

CREATE VIEW HumanResources.EmployeeHireDate
AS
SELECT p.FirstName,
    p.LastName,
    e.HireDate
FROM HumanResources.Employee AS e
INNER JOIN Person.Person AS p
    ON e.BusinessEntityID = p.BusinessEntityID;
GO

-- Query the view
SELECT FirstName,
    LastName,
    HireDate
FROM HumanResources.EmployeeHireDate
ORDER BY LastName;
GO
```

上课例题[[SQL Server 操作代码#视图的创建]]
```sql
create view V_ysj  WITH ENCRYPTION
as
select 学号,姓名,性别,籍贯,班级代号 from 学生
go
update 学生 set 学分=学分+1 where 姓名='张然'
go
update v_fdy set 学分=学分+1 where 姓名='张然'
go
/*创建一个名为V_ysj的视图，其中包含学生表中的学号、姓名、性别、籍贯和班级代号。

然后，它更新了学生表中名为“张然”的学生的学分，将其增加1。

接下来，它尝试更新名为“张然”的教师视图v_fdy中的学分，但是由于没有提供有关v_fdy视图的信息，因此无法确定是否存在该视图。*/

create view V_gril 
as
select * from 学生 where 性别='女'
WITH CHECK OPTION
go

/*创建一个名为V_gril的视图，其中包含学生表中性别为“女”的所有学生的所有列。*/

create view V_avg
as
select 性别,avg(学分)  as 平均分 from 学生 group by 性别
go
/*创建一个名为V_avg的视图，其中包含学生表中每个性别的平均学分。*/

create view aaa
as
select 姓名,班级名称,专业名称,系部名称 from 学生 a join 班级 b join 专业 c join 系部 d
on d.系部代码=c.系部代码 
on c.专业代码=b.专业代码
on b.班级代号=a.班级代号
go
drop view v_avg
go

/*创建一个名为aaa的视图，其中包含姓名、班级名称、专业名称和系部名称，这些信息来自于学生表、班级表、专业表和系部表的联接。然后，删除名为v_avg的视图。*/

```

# 存储过程

存储过程是一组为了完成特定功能的 SQL 语句集，经编译后存储在数据库中，用户可通过指定存储过程的名字并给定参数（如果该存储过程带有参数）来调用执行。存储过程是数据库应用程序中最重要的组成部分之一，它可以简化复杂的操作，提高执行效率，增强安全性，有效地实现数据库事务的一致性。

```sql
USE AdventureWorks2012;  
GO  
CREATE PROCEDURE HumanResources.uspGetEmployeesTest2   
    @LastName nvarchar(50),   
    @FirstName nvarchar(50)   
AS   

    SET NOCOUNT ON;  
    SELECT FirstName, LastName, Department  
    FROM HumanResources.vEmployeeDepartmentHistory  
    WHERE FirstName = @FirstName AND LastName = @LastName  
    AND EndDate IS NULL;  
GO
```

简化
```sql
CREATE { PROC | PROCEDURE } 存储过程名称
[ @参数 数据类型]  
AS
  <SQL语句> 
```

上课实例[[SQL Server 操作代码#存储过程]]
```sql
use xsgl
go
create procedure pro_a
WITH ENCRYPTION
as
select 姓名,出生年月,身份证号,学分 from 学生 where 性别='女'
go

/*创建一个名为pro_a的存储过程，其中包含学生表中性别为“女”的所有学生的姓名、出生年月、身份证号和学分。*/
/*WITH ENCRYPTION选项用于加密存储过程，以防止用户查看存储过程的源代码。*/

create procedure pro_b
@x nvarchar(8)='张然'
as
select 手机号码 from 学生 where 姓名=@x
go
/*创建一个名为pro_b的存储过程，其中包含学生表中姓名为“张然”的学生的手机号码。*/

create procedure pro_c
@x nvarchar(8)
as
select 身份证号,手机号码,学分 from 学生 where 姓名=@x
go
/*创建一个名为pro_c的存储过程，其中包含学生表中姓名为“张然”的学生的身份证号、手机号码和学分。*/

create procedure pro_update
@y nchar(10)
as
update xs set 学分=学分+2 where 学号=@y
go
/*创建一个名为pro_update的存储过程，其中包含学生表中学号为“2018101”的学生的学分加2。*/

create procedure pro_del
@z nchar(10)
as
delete from xs  where 学号=@z
go
/*创建一个名为pro_del的存储过程，其中包含学生表中学号为“2018101”的学生的信息。*/

create procedure pro_两表连接
@x char(10)
as
select 姓名,班级名称 from 学生 a join 班级 b om a.班级代号=b.班级代号 and 学号=@X
go
/*创建一个名为pro_两表连接的存储过程，其中包含学生表和班级表中学号为“2018101”的学生的姓名和班级名称。*/

create procedure pro_ins
@a char(10),@b,nvarchar(8),@c date ,@d tinyint
as 
insert into 学生 (学号,姓名,出生年月,学分) values (@a,@b,@c,@d)
go
/*创建一个名为pro_ins的存储过程，其中包含学生表中学号为“333”的学生的姓名、出生年月和学分。*/

use xsgl
go

/*下面是执行存储过程：*/
execute pro_ins '333','张三','1994/08/2',25

go
create procedure pro_avg
@sid char(7),@aver int output
as
select @aver=avg(学分) from 学生 where 班级代号=@sid group by 班级代号
go

/*下面是执行存储过程：*/
declare @aver int
exec pro_avg '2008004',@aver output
print '该班的平均学分为：'+cast(@aver as char(2))

```
