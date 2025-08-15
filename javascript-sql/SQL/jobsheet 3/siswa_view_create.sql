use sekolah;

create view vw_siswa as
	select nis as 'NIS SIWA', nama as 'Nama Siswa'
    from siswa;