let nasiGoreng = 25000;
let mieGoreng = 22000;
let capcay = 32000;

const totalHarga = (nasiGoreng + mieGoreng + capcay);

const diskon = 0.1;
const totalDiskon = totalHarga * diskon;
const totalBayar = totalHarga - totalDiskon;
const pembayaran = 100000;
console.log(`Harga Nasi Goreng = Rp. ${nasiGoreng}`);
console.log(`Harga Mie Goreng = Rp. ${mieGoreng}`);
console.log(`Harga Capcay = Rp. ${capcay}`);
console.log(`Harga Total = Rp. ${totalHarga}`);
console.log(`Diskon = 10%`);
console.log(`Harga Setelah Diskon = Rp. ${totalBayar}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${pembayaran - totalBayar}`);