const aktifitas = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0  && i % 2 === 0) {
            console.log(`${i} - Mendapatkan Sertifikat`);
        } else if (i % 3 === 0) {
            console.log(`${i} - Mengikuti Uji Kompetensi`);
        } else if (i % 2 === 0) {
            console.log(`${i} - Mengikuti Pelatihan`);
        } else if (i % 2 === 1) {
            console.log(`${i} - Apel Pagi`);
        } else {
            console.log(i);
        }
    }
}

aktifitas(20);