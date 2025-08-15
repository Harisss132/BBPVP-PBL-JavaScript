create database latihan_1;
use latihan_1;

create table buku (
Kode_Buku char(4) primary key,
Judul_Buku varchar(30) not null,
Pengarang varchar(20) not null,
Penerbit varchar(20) not null);

create table pengembalian(
Kode_Pinjam char(4),
Kode_Buku char(4),
Tgl_Kembali date not null,
Denda numeric(9,0) not null,
primary key(kode_Pinjam, Kode_Buku),
foreign key(Kode_Pinjam)
references Peminjaman(Kode_Pinjam),
foreign key(kode_buku)
references buku(kode_buku)
);

create table peminjaman(
Kode_Pinjam char(4) primary key,
NIK char(18),
NIM char(18),
Tgl_pinjam date not null,
foreign key(NIK) references karyawan(NIK),
foreign key(NIM) references mahasiswa(NIM));

create table mahasiswa(
NIM char(8) primary key,
Nama_Mhs varchar(30) not null,
Alamat_Mhs varchar(30) not null,
NoHP_Mhs varchar (15) not null);

create table karyawan(
NIK char(18) primary key,
Nama_Karyawan varchar(30) not null,
Alamat_Karyawan varchar(30) not null,
NoHp_Karyawan varchar(15) not null,
Jabatan varchar(25) not null);

drop database latihan_1;

alter table mahasiswa
add primary key(NIM);