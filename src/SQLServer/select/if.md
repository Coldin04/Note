---
title: 条件语句
order: 4
---

# if、Case、while语句

## if语句

上课实例[[SQL Server 操作代码#if语句]]
```sql
use XSGL 
create procedure pro_BYCX
@x char(10)
as 
declare @y tinyint
select @y=学分 from 学生 where 学号=@x
begin
if @y>=25
	print '祝贺你，你已经达到毕业条件'
else
	print '很遗憾，你未达到毕业条件'
end
/*创建一个名为pro_BYCX的存储过程，其中包含学生表中学号为“2018101”的学生的学分。如果学分大于等于25，则打印“祝贺你，你已经达到毕业条件”，否则打印“很遗憾，你未达到毕业条件”。*/
```

## case语句

[[SQL Server 操作代码#Case语句]]
```sql
use XSGL
go
select 学号，课程号，成绩
case 
	when 成绩>90 and 成绩<=100 then '优秀'
	when 成绩>80 and 成绩<=90 then '良好'
	when 成绩>70 and 成绩<=80 then '中等'
	when 成绩>60 and 成绩<=70 then '合格'
else '不合格'
end
/*这是一个SQL查询语句，用于从成绩表中检索学号、课程号和成绩，其中成绩大于90且小于等于100的学生成绩为“优秀”，成绩大于80且小于等于90的学生成绩为“良好”，成绩大于70且小于等于80的学生成绩为“中等”，成绩大于60且小于等于70的学生成绩为“合格”，否则为“不合格”。*/
```

## while语句

[[SQL Server 操作代码#while语句]]
```sql
use XSGL
GO

declare @x int
while 1=1 /*1=1为真，所以循环一直执行*/
begin
select @x=count(*) from 学生 where 学分<=30 /*计算学分小于等于30的学生的人数*/
if @x>0
update 学生 set 学分=学分+2 where 学分<=30 /*将学分小于等于30的学生的学分加2*/
else
break
end
print '加分后学分如下：'
select 姓名,学分 from 学生
/*这是一个SQL查询语句，用于从学生表中检索姓名和学分，其中学分小于等于30的学生的学分加2。*/
```
简单的实例
```sql
declare @x int,@y int /*声明变量*/
set @x=8
set @y=23 --赋值
​begin
  ​if @x>@y
    print @x-@y
  ​else
    print @y-@x
end
/*使用if @x>@y进行条件判断，如果@x大于@y，则执行print @x-@y打印@x减去@y的结果。否则，执行print @y-@x打印@y减去@x的结果。*/
```
一个在数据库中应用的例子:
```sql
use xsgl
go
declare @avgs int
select @avgs=avg(grade) from student s ,grade g where s.studentid=g.studentid
and studentname='张然'  -- 注：第一个'grade'指列名，而第二个指表名
begin
​if (@avgs>=60)
   select s.studentid,studentname,courseid,grade from student s ,grade g where s.studentid=g.studentid
and studentname='张然'
else
   print '成绩不理想!'
end
```
计算1-10之间的奇数和
```sql
declare @i tinyint,@sum int
set @i=0
set @sum=0
while @i<=10
begin
if @i%2=1
  set @sum=@sum+@i
set @i=@i+1
end
print @sum
/*判断@i是否为奇数，如果是奇数，则将@i加到@sum中，否则不做任何操作。*/
```
