use sekolah;

create view vw_siswa as
	select nis as 'NIS SISWA', name as 'Nama Siswa'
    from siswa;