CREATE database Bamazon_DB;

USE Bamazon_DB;

create table products(
item_id INTEGER(11) auto_increment NOT NULL,
product_name varchar(30) not null,
department_name varchar(30) not null,
price integer(11) not null,
stock_quantity integer(11) not null,
primary key (item_id)
);

#--item 1--
insert into products(product_name, department_name, price, stock_quantity)
values("Basketball", "Athletics", 15.00, 100);

#item 2
insert into products(product_name, department_name, price, stock_quantity)
values("Halo Reach", "Video Games", 40.00, 100);

#item 3
insert into products(product_name, department_name, price, stock_quantity)
values("Frozen Pizza", "Food", 8.00, 100);

#item 4
insert into products(product_name, department_name, price, stock_quantity)
values("Polo shirt", "Clothing", 20.00, 100);

#item 5
insert into products(product_name, department_name, price, stock_quantity)
values("I-Phone 7", "Electronics", 200.00, 100);

#item 6
insert into products(product_name, department_name, price, stock_quantity)
values("Paper Towels", "Cleaning", 5.00, 100);

#item 7
insert into products(product_name, department_name, price, stock_quantity)
values("Honda Volt", "Cars", 16000.00, 100);

#item 8
insert into products(product_name, department_name, price, stock_quantity)
values("I-Phone 7", "Electronics", 200.00, 100);

#item 9
insert into products(product_name, department_name, price, stock_quantity)
values("Lord of the Rings Return of the King (Paperback) ", "Books", 15.00, 100);

#item 10
insert into products(product_name, department_name, price, stock_quantity)
values("Star Wars Revenge of the Sith", "Movies", 20.00, 100);



USE Bamazon_DB;
select * from products;