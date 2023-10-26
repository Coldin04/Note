---
title: 查询数据
order: 1
---

例子：`select * frome 学生`

```sql
USE xsgl
select * frome 学生
go
select distinct 性别 from 学生
go
select top 5 * from 学生  /*从顶端查询*/
go
select all top 50 percent * from 学生
go
select 'XH'=学号,'XM'=姓名 into XS from 学生
go

select * from  学生 where 性别='女' and 籍贯='合肥'
go

select 姓名,学分 from 学生 where 学分 between 21 and 25
go

select 姓名,籍贯 from 学生 where 籍贯 in ('合肥','安庆','芜湖')
go

select * from 学生 where 手机号码 is not null
go

select 姓名 from 学生 where 姓名 like '李%' /*此为通配符*/

select 姓名 from 学生 where 姓名 like '李_' /*此下划线表名李后仅存在一个字*/
go
```

## 函数

#绝对值 #打印π #保留小数 #向上取整 #向下取整 #随机数 #获取日期 #计算生日 #平均数 #最大值 #最小值 #时间差 #数值统计

[更多函数点我](https://learn.microsoft.com/zh-cn/sql/t-sql/language-reference?view=sql-server-ver16)
上课例题：[[SQL Server 操作代码#order by 字符处理函数]]
```sql
print reverse ('合肥职业技术学院')
print abs(-5)/*打印-5的绝对值*/
print pi()/*打印pi（3.14……）*/
print round(pi(),3)/*函数的嵌套，round()表示保留小数*/
print power(3.5789,4.2314)
print floor(-5.6)/*向下取整函数*/
print ceiling(5.6)/*向上取整函数*/
print rand()/*0~1之间生成随机数，可在内部输入数字作为种子*/
print getdate()
print year(getdate())
print month(getdate())
print day(getdate())
print datename(weekday,etdate())
print '今天是：'+cast(year(getdate())as char(4))+'年'+cast(month(getdate()) as char(2))+'月'+cast(day(getdate()) as char(2))+'日'+cast(datename(weekday,getdate()))
第一个查询使用了 `,` 操作符进行连接，而第二个查询使用了 `JOIN` 操作符进行连接。在实际应用中，使用 `JOIN` 操作符进行连接更为常见，因为它更加直观和易于理解。
print dateadd(year,10,getdate())/*语法：DATEADD(日期部分,所加数字,日期)*/
print datediff(year,'2005/06/12',getdate())/*语法:日期部分,减去日期,被减日期*/
```

结合使用举例：
```sql
use xsgl
go
select * from 学生 order by 姓名
select * from 学生 order by 姓名 desc/*倒叙排序*/
select 姓名,sqrt(学分)*10 总第一个查询使用了 `,` 操作符进行连接，而第二个查询使用了 `JOIN` 操作符进行连接。在实际应用中，使用 `JOIN` 操作符进行连接更为常见，因为它更加直观和易于理解。成绩 from 学生
select 姓名,datediff(year,出生年月,getdate()) 年龄 from 学生 /*计算学生年龄*/
```

## 聚合函数
### `AVG()`平均值函数
```sql
select avg() from 学生 /*计算平均分*/
go
select avg(datediff(year,出生年月,getdate())) from 学生 /*计算平均年龄*/
go
select 班级代号,avg(学分) as 平均分 from 学生 group by 班级代号 having avg(学分)>=21 /*计算学分大于21分的平均学分*/
go
select 性别,avg (datediff(year,出生年月,getdate())) as 平均年龄 from 学生 group by 性别
select 班级代号,avg(datediff(year,出生年月,getdate())) as 平均年龄 from 学生 group by 班级代号
select 班级代号,avg(学分) as 平均分 from 学生 group by 班级代号
go

```

### `MAX()`最大值

### `substring`
>用于通过身份证号查询生日，也可以用于学号判断班级等
```sql
fn:substring($sourceString as xs:string?, $startingLoc as xs:decimal?, $length as xs:decimal?) as xs:string?
```
_$sourceString_  
资源字符串。
_$startingLoc_  
子字符串在资源字符串中的起点。 如果此值为负数或 0，则只返回那些所在位置大于零的字符。 如果它大于 _$sourceString_的长度，则返回零长度字符串。
_$length_  
[可选] 要检索的字符数。 如果未指定，它将返回从 _$startingLoc_ 中指定的位置到字符串末尾的所有字符。

[官方文档](https://learn.microsoft.com/zh-cn/sql/xquery/functions-on-string-values-substring?view=sql-server-ver16#remarks)

```sql
select datediff(year,substring(身份证号,7,8),getdate()) from 学生
```

### `DATADIFF` 
 `DATADIFF(类型,较早时间,较晚时间)`
用于计算时间差值，如
```sql
select datediff(year,出生年月,getdate()) from 学生
go
select datediff(year,substring(身份证号,7,8),getdate()) from 学生 /*从身份证中提取生日*/
select avg(datediff(year,出生年月,getdate())) from 学生 /*计算平均年龄*/
go
select 性别,avg (datediff(year,出生年月,getdate())) as 平均年龄 from 学生 group by 性别
select 班级代号,avg(datediff(year,出生年月,getdate())) as 平均年龄 from 学生 group by 班级代号
```
可计算学生的年龄，类型可以换成月或日，获取更精确的日期。

### `COUNT`计数
```SQL
select count(*) from 学生 /*计算学生总数*/
go
select count(学分) from 学生 /*计算学分不为空的学生*/
go
```

## 多表查询(联接)
::: tip 使用场景：
结合xx表和xx表输出xxx
:::

通过联接，可以从两个或多个表中根据各个表之间的逻辑关系来检索数据。 联接指明了 SQL Server 应如何使用一个表中的数据来选择另一个表中的行。

下面是使用此联接的一个简单 `SELECT` 语句：
```sql
SELECT ProductID, Purchasing.Vendor.BusinessEntityID, Name
FROM Purchasing.ProductVendor INNER JOIN Purchasing.Vendor
    ON (Purchasing.ProductVendor.BusinessEntityID = Purchasing.Vendor.BusinessEntityID)
WHERE StandardPrice > $10
  AND Name LIKE N'F%'
GO
```


```sql
use XSGL
select * from 学生,成绩	where 学生.学号 = 成绩.学号  /*普通链接*/
go
select * from 学生 join 成绩 on 学生.学号=成绩.学号 /*快速链接*/
go
/*第一个查询使用了 `,` 操作符进行连接，而第二个查询使用了 `JOIN` 操作符进行连接。在实际应用中，使用 `JOIN` 操作符进行连接更为常见，因为它更加直观和易于理解。*/
```

### 更多实例

```sql
select 姓名,成绩 from 学生 join 成绩 on 学生.学号=成绩.学号  
go
select s.学号,姓名,课程号,成绩 from 学生 s join 成绩 g on s.学号=g.学号
go
select 学号,姓名,.c班级代号,班级名称 from 学生 s join 成绩 g on s.学号=g.学号
select 姓名,班级名称 from 学生 s join  班级 c on s,班级代号=c.班级代号
go
select 姓名,课程名称,成绩 from 学生 a join 成绩 b on a.学号=b.学号 join 课程 c on b.课程号=c.课程号
select 姓名,课程名称,成绩 from 学生 a join  成绩 b join 课程 c
on c.课程号=b.课程号
on b.学号=c.学号

select 姓名,班级名称,专业名称,系部名称 from 学生 a  join 班级 b join 专业 c join 系部 d 
on d.系部代码=c.系部代码
on c.专业代码=b.专业

select 姓名,系部名称 from 学生 a join 班级 b join 专业 c join 系部 d
on d.系部代码=c.系部代码
on c.专业代码=b.专业代码
on b.班级代码=a.班级代码  /*通过相关字段课将四张表关联，从而使四张表可联系起来*/

select * from 学生 a left outer join 成绩 b on a.学号=b.学号
select * from 学生 a cross join 成绩 b
select 姓名,成绩, from 学生 a full join 成绩 b on a.学号=b.学号
go
```
>注：`学生 a`指的是让`a`代替表名`学生`，其他也相似，在后面`a.学号`指的是 `学生`表中`学号`列。


[[SQL Server 操作代码#多表查询]]


## 子查询

子查询也称为内部查询或内部选择，而包含子查询的语句也称为外部查询或外部选择。

许多包含子查询的 Transact-SQL 语句也可以表述为联接。 其他问题只能通过子查询提出。 在 Transact-SQL 中，包含子查询的语句和不包含子查询的语义等效版本之间通常没有性能差异。 有关SQL Server如何处理查询的体系结构信息，请参阅 [SQL 语句处理](https://learn.microsoft.com/zh-cn/sql/relational-databases/query-processing-architecture-guide?view=sql-server-ver16#sql-statement-processing)。 但是，在一些必须检查存在性的情况中，使用联接会产生更好的性能。 否则，为确保消除重复值，必须为外部查询的每个结果都处理嵌套查询。 所以在这些情况下，联接方式会产生更好的效果。

以下示例演示返回相同结果集和执行计划的子查询 `SELECT` 和联接 `SELECT` ：

```sql
USE AdventureWorks2016;
GO

/* SELECT statement built using a subquery. */
SELECT [Name]
FROM Production.Product
WHERE ListPrice =
    (SELECT ListPrice
     FROM Production.Product
     WHERE [Name] = 'Chainring Bolts' );
GO

/* SELECT statement built using a join that returns
   the same result set. */
SELECT Prd1.[Name]
FROM Production.Product AS Prd1
     JOIN Production.Product AS Prd2
       ON (Prd1.ListPrice = Prd2.ListPrice)
WHERE Prd2.[Name] = 'Chainring Bolts';
GO
```


```sql
select 姓名 from 学生 where 班级代号=(select 班级代号 from 学生 where 姓名='木子')
go
/*这个查询语句的意思是：首先在学生表中找到名字为“木子”的学生的班级代号，然后在学生表中找到班级代号等于该班级代号的所有学生的姓名。*/
select 姓名 from 学生 where 学号 not in (select distinct 学号 from 成绩 )
go
/*这是一个SQL查询语句，用于从学生表中检索姓名，其中学号不在（select distinct 学号 from 成绩）的学生。*/

select 姓名 from 学生 where 出生年月<all(select 出生年月 from 学生 where 籍贯='合肥')
/*这个查询语句的意思是：首先在学生表中找到籍贯为“合肥”的所有学生的出生年月，然后在学生表中找到所有出生年月小于该列表中任何一个出生年月的学生的姓名。*/

select 姓名 from 学生 where 出生年月<some(select 出生年月 from 学生 where 籍贯='合肥')
go
/*在学生表中找到籍贯为“合肥”的所有学生的出生年月，然后在学生表中找到所有出生年月小于该列表中任何一个出生年月的学生的姓名。*/

select 学号 as 编号 ,姓名,'学生' as 类别 from 学生 
union
 select 教师编号 ,教师姓名,'教师'  from 教师
go
/*从学生表中检索学号、姓名和“学生”作为类别，然后将其与教师表中的教师编号、教师姓名和“教师”作为类别合并。*/
```

