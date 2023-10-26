---
title: 触发器
order: 5
---
# 触发器

触发器是一种特殊的存储过程，它在满足一定条件时自动执行。触发器是与表事件相关的特殊存储过程，它们在满足定义的条件时自动执行。触发器与表有关，与行有关，与语句无关。触发器是与表事件相关的特殊存储过程，它们在满足定义的条件时自动执行。触发器与表有关，与行有关，与语句无关。

## DML触发器

```SQL
Create TRIGGER 触发器名  ON { 表名 | 视图名 } 
 {FOR|AFTER|INSTEAD OF } { [Delete] |[Insert ]|[ Update ] }  
 AS
  SQL语句 [ ...n ]
```

[[SQL Server 操作代码#触发器]]
```sql
use 学生管理
go

create trigger tri_del on 学生 for delete
as --删除学生表中的学生时，将学生的信息插入到删除学生表中
insert into 学生 values ('666','王小六','女','广州')
go
delete from 学生 where 学号='555'
go
select * from 学生
go

create trigger tri_ins on 学生 for insert
as --向学生表中插入学生时，将学生的信息插入到插入学生表中
delete from 学生 where 学号='666'
go
insert into 学生 values ('555','王老五','男','北京')
go
select * from 学生
go

create trigger tri_upd on 学生 for update
as --更新学生表中的学生时，将学生的信息插入到更新学生表中
update 学生 set 籍贯='东京' where 学号='222'
go
update 学生 set 籍贯='香港' where 学号='111'
go
select * from 学生


create trigger tri_upd1 on 成绩 for update
as
select i.学号,i.课程号,d.成绩 旧成绩,i.成绩 新成绩 from inserted i join deleted d on i.学号=d.学号 and i.课程号=d.课程号
go
update 成绩 set 成绩=成绩+3 where 学号='333'--更新成绩表中的成绩时，将学生的信息插入到更新成绩表中

create trigger tri_no_del on all server for drop_database --创建一个名为tri_no_del的触发器，关联到服务器上的drop_database事件。
as
print '对不起，你不能删除数据库!'
rollback --删除数据库时，将数据库恢复到删除前的状态
go

create trigger tri_upd on 学生 for update
as
declare @oldsid nchar(10),@newsid nchar(10)
select @oldsid=学号 from deleted --从deleted临时表中获取被更新的记录的旧学号，并将其赋值给@oldsid变量。
select @newsid=学号 from inserted --从inserted临时表中获取更新后的记录的新学号，并将其赋值给@newsid变量。
update 成绩 set 学号=@newsid where 学号=@oldsid --根据旧学号更新表成绩中相应的记录的学号为新学号。
go

update 学生 set 学号='888' where 学号='222' --测试效果.将学号为'222'的学生记录的学号更新为'888'，触发器会在此时执行，将表成绩中对应学号的记录的学号也更新为'888'。

```
