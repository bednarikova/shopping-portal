insert into product (id, name, description, type)
values (1, 'product1', 'description1', 'type1'),
       (2, 'product2', 'description2', 'type2'),
       (3, 'product3', 'description3', 'type1'),
       (4, 'product4', 'description4', 'type2');

insert into address (id, city, house_number, state, street, zip_code)
values (1, 'Bratislava', '46', 'Slovakia', 'Osuskeho', 85103),
       (2, 'Nitra', '2', 'Slovakia', 'Holleho', 94901),
       (3, 'Zbehy', '641', 'Zbehy', 'Osuskeho', 95142);

insert into customer (id, first_name, last_name, address_id)
values (1, 'Daniel', 'Jahodka', 1),
       (2, 'Alenka', 'Bednarikova', 2);

-- insert into userbase (id, email, password_hash, password_salt, customer_id)
-- values (1, 'daniel@email.com', convert(varbinary(256), '0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e'), convert(varbinary(255), 'dc90cf07de907ccc64636ceddb38e552a1a0d984743b1f36a447b73877012c39'), 1),
--        (2, 'alena@email.com', convert(varbinary(256), '6cf615d5bcaac778352a8f1f3360d23f02f34ec182e259897fd6ce485d7870d4'), convert(varbinary(255), 'dbc4579ae2b3ab293213f42bb852706ea995c3b5c3987f8aa9faae5004acb3cf'), 2);

insert into userbase (id, email, password_hash, password_salt, customer_id)
values (1, 'daniel@email.com', STRINGTOUTF8('0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e'), STRINGTOUTF8('dc90cf07de907ccc64636ceddb38e552a1a0d984743b1f36a447b73877012c39'), 1),
       (2, 'alena@email.com', STRINGTOUTF8('6cf615d5bcaac778352a8f1f3360d23f02f34ec182e259897fd6ce485d7870d4'), STRINGTOUTF8('dbc4579ae2b3ab293213f42bb852706ea995c3b5c3987f8aa9faae5004acb3cf'), 2);


insert into purchase (id, customer_id)
values (1, 1),
       (2, 1),
       (3, 2);

insert into purchase_products (purchase_id, products_id)
values (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (2, 3),
       (2, 4),
       (3, 2),
       (3, 4);