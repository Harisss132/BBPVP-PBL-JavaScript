use pegawai;

-- COMMIT - Tidak bisa di rollback

start transaction;
insert into hobi (id, nama_hobi)
values (5, 'Bersepeda');
commit;
rollback;

select * from hobi;

start transaction;
insert into hobi (id, nama_hobi)
values (5, 'Belajar');
rollback;