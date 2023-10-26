---
title: 数据表
order: 2
---

# 创建表

## 在 SQL Server Management Studio 中使用表设计器

1. 在 SSMS 中的“对象资源管理器”中，连接到包含要修改的数据库的 数据库引擎 实例。
    
2. 在 **“对象资源管理器”**中，展开 **“数据库”** 节点，然后展开将包含新表的数据库。
    
3. 在“对象资源管理器”中，右键单击数据库的“**表”**节点，然后选择“**新建表**”。
    a
4. 键入列名，选择数据类型，并选择各列是否允许为空值，如下图所示：
    
    ![显示为 ModifiedDate 列选择“允许 Null 值”的屏幕截图。](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/media/create-tables-database-engine/add-columns-in-table-designer.gif?view=sql-server-ver16)
    
5. 若要指定列的更多属性（如标识或计算列值），请选择该列，然后在列属性选项卡中选择适当的属性。 有关列属性的详细信息，请参阅[表列属性 (SQL Server Management Studio)](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/table-column-properties-sql-server-management-studio?view=sql-server-ver16)。
    
6. 若要将某个列指定为主键，请右键单击该列，然后选择“设置主键”。 有关详细信息，请参阅 [Create Primary Keys](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/create-primary-keys?view=sql-server-ver16)。
    
7. 若要创建外键关系、CHECK 约束或索引，请在“表设计器”窗格中单击右键，然后从列表中选择一个对象，如下图所示：
    
    ![显示“关系”选项的屏幕截图。](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/media/create-tables-database-engine/add-table-objects.gif?view=sql-server-ver16)
    
    有关这些对象的详细信息，请参阅 [Create Foreign Key Relationships](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/create-foreign-key-relationships?view=sql-server-ver16)、 [Create Check Constraints](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/create-check-constraints?view=sql-server-ver16) 和 [Indexes](https://learn.microsoft.com/zh-cn/sql/relational-databases/indexes/indexes?view=sql-server-ver16)。
    
8. 默认情况下，该表包含在 **dbo** 架构中。 若要为该表指定不同架构，请在“表设计器”窗格中右键单击，然后选择“属性”，如下图中所示。 从“架构”下拉列表中选择适当的架构。
    
    ![显示“架构”选项的“属性”窗格的屏幕截图。](https://learn.microsoft.com/zh-cn/sql/relational-databases/tables/media/create-tables-database-engine/specify-table-schema.gif?view=sql-server-ver16)
    
    有关架构的详细信息，请参阅 [Create a Database Schema](https://learn.microsoft.com/zh-cn/sql/relational-databases/security/authentication-access/create-a-database-schema?view=sql-server-ver16)。
    
9. 从“文件”菜单中，选择“保存表名”。
    
10. 在“ **选择名称** ”对话框中，键入表的名称，然后选择“ **确定**”。
    
11. 若要查看这个新表，请在 **“对象资源管理器”**中展开 **“表”** 节点，然后按 **F5** 刷新对象列表。 该新表将显示在表列表中。


## 使用 Transact-SQL

```sql
CREATE TABLE dbo.PurchaseOrderDetail (
    PurchaseOrderID INT NOT NULL,
    LineNumber SMALLINT NOT NULL,
    ProductID INT NULL,
    UnitPrice MONEY NULL,
    OrderQty SMALLINT NULL,
    ReceivedQty FLOAT NULL,
    RejectedQty FLOAT NULL,
    DueDate DATETIME NULL
);
```

# 删除表

## DROP
```sql
DROP TABLE 学生
go
```
## TRUNCATE
快速删除表但不删除表名：
```sql
TRUNCATE TABLE 表名
```




