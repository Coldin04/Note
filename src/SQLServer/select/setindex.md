---
title: 索引的使用
order: 3
---
索引是对数据库表中一列或多列的值进行排序的一种结构。 可以创建索引以便快速搜索数据库表中的特定信息。 索引可类比于书籍的索引。 例如，如果要在书中查找特定主题的信息，则可以先查看索引，以便找到包含该主题的页码。 然后，您可以直接翻到这些页，而不必翻阅整本书。

## 使用 SQL Server Management Studio创建

1. 在 **“对象资源管理器”**中，展开要创建新索引的数据库。
2. 右键单击“ **索引** ”文件夹，然后选择“ **新建索引...** ”。
3. 在“ **新建索引向导** ”中，选择要创建索引的表。
4. 选择“ **下一步** ”。
5. 在“ **选择索引键列** ”页面上，选择要包含在索引中的列。
6. 选择“ **下一步** ”。
7. 在“ **选择索引选项** ”页面上，选择索引的选项。
8. 选择“ **下一步** ”。
9. 在“ **指定索引名称** ”页面上，输入索引的名称。
10. 选择“ **下一步** ”。
11. 在“ **完成** ”页面上，查看索引的定义。

## 使用 Transact-SQL创建

[[SQL Server 操作代码#补上索引]]
```sql
create clustered index IX_XH on aa (学号 )
/*创建一个名为IX_XH的聚集索引，其中包含aa表中学号列的值。*/
create unique nonclustered index IX_XM on aa (姓名 desc)
/*创建一个名为IX_XM的非聚集索引，其中包含aa表中姓名列的值。*/
create index IX_XF on aa (学分) with FILLFACTOR = 50
/*创建一个名为IX_XF的非聚集索引，其中包含aa表中学分列的值。*/

use xsgl
go
select 姓名 from aa
select 籍贯 from aa
select 学分 from aa
go
drop index aa.ix_xm
go
```
