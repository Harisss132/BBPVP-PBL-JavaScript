create database pegawai;

use pegawai;

create table hobi (
id int primary key,
nama_hobi varchar(50) not null);

/* cara lain menulis PK
create table hobi(
id int auto_increment,
nama_hobi varchar(50) not null,
primary key(Id)); */

create table asn(
nip char(18) primary key,
nama varchar(100),
id_hobi int,
foreign key(id_hobi) references hobi(id));

alter table asn change nama nama_lengkap varchar(100);

rename table asn to pns;

show databases;
show tables;

drop table pns;
drop database pegawai;

insert into hobi values
(1,'Memasak'),
(2, 'Olahraga'),
(3, 'Menyanyi'),
(4, 'Membaca');

delete from hobi;

insert into asn values
('143267920987871345', 'Rose', 1),
('143267920987872468', 'Jasmine', 2),
('143267920987832635', 'Daisy', 3),
('143267920987872142', 'Lavender', 2),
('143267920987811285', 'Orchid', 4);

select * from asn;

update asn set nama = "Sunflower" where nip = '143267920987832635';
delete from asn where nip = '143267920987832635';
select nip, nama from asn where nip in('143267920987871345', '143267920987811285');
