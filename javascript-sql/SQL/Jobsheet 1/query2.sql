use pegawai;

create table asn_audit(
id int auto_increment primary key,
aksi varchar(100),
nip char(20),
nama varchar(100),
id_hobi int,
tgl datetime);

create trigger after_nip_ditambah
after insert on asn
for each row 
insert into asn_audit
set aksi = 'Tambah',
nip = new.nip,
nama = new.nama,
id_hobi = new.id_hobi,
tgl = now();

insert into asn values ('123456712891872135', 'Jasmine', 2);
select * from asn_audit;

