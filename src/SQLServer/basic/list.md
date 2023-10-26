---
title: 添加/删除/修改列
order: 3
---

# 修改数据表的列
## 向表中添加列

### 用表设计器向表中插入列

1. 在“对象资源管理器”中，右键单击要为其添加列的表，再选择“设计”。
2. 选择“列名”列中的第一个空单元。 
3. 在该单元中键入列名。 列名是必需设置的值。
4. 按 Tab 键转到 **“数据类型”** 单元格，再从下拉列表中选择数据类型。它是必需设置的值，如果你没有作出选择，它将被赋以默认值。
 >备注
 >可以在 **“选项”** 对话框中的 **“数据库工具”**之下更改默认值。
 
5. 在 **“列属性”** 选项卡上继续定义任何其他列属性。
>备注
>列属性的默认值在您创建新列时添加，但您可以在 **“列属性”** 选项卡中更改这些值。

6. 添加完列后，从“文件”菜单中，选择“保存”表名称。

### 使用 Transact-SQL

例子：将`column_b`和`column_c`添加到`dbo.doc_exa `
```sql
ALTER TABLE dbo.doc_exa 
ADD column_b VARCHAR(20) NULL, column_c INT NULL ;
```

上课实例：[[SQL Server 操作代码#修改数据表]]


## 删除列

### 使用表设计器删除列
以下步骤说明如何在 SSMS 中使用表设计器删除列：

1. 在“对象资源管理器”中，右键单击要从其中删除列的表，然后选择“设计”。
2. 右键单击要删除的列，然后从快捷菜单上选择“删除列”。
3. 如果该列参与了关系（FOREIGN KEY 或 PRIMARY KEY），则将显示一条消息，提示您确认删除所选列及其关系。 选择 **“是”** 。

### 使用 Transact-SQL 删除列

[官方文档](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/delete-columns-from-a-table?view=sql-server-ver16#TsqlProcedure)
```sql
ALTER TABLE dbo.doc_exb DROP COLUMN column_b;
GOa
```

上课实例：[[SQL Server 操作代码#修改数据表]]

## 修改列

#### 使用 SQL Server Management Studio
1. 在对象资源管理器中，右键单击要更改其小数位数的列所在的表，再选择“设计” 。
    
2. 选择要修改其数据类型的列。
    
3. 在“列属性”选项卡中，选择“数据类型”属性的网格单元格，再从下拉列表中选择新的数据类型 。
    
4. 在“文件”菜单上，选择“保存”以保存表名称。

### 使用 Transact-SQL

```sql 
INSERT INTO dbo.doc_exy (column_a) VALUES (10);  
GO  
ALTER TABLE dbo.doc_exy ALTER COLUMN column_a DECIMAL (5, 2);  
GO
```

