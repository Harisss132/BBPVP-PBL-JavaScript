let daftarBelaja = [];

daftarBelaja.push("Beras", "Minyak", "Gula");

const indeksof = daftarBelaja.indexOf("Minyak")
daftarBelaja.splice(1, 1)

daftarBelaja.push("Telur", "Sayur", "Buah");

console.log("Daftar Belanja Ibu Lily :")
daftarBelaja.sort().forEach(function(nilai, index) {
    console.log(`${index + 1}. ${nilai}`);
});