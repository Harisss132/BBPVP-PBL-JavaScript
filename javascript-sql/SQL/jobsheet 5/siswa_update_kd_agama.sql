use sekolah;

-- rwgwxp : mencocokan pola text menggunakan regular expression
update siswa
set kd_agama = '1'
where name regexp '^[NS]';

update siswa 
set kd_agama = '4'
where name regexp '^D';