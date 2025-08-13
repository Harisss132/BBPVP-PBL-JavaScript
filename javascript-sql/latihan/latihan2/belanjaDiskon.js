let headset = 225000;
let mouse = 150000;
let keyboard = 350000;

const totalBelanja = (headset + mouse + keyboard);
// const diskon = 0.1;


if (totalBelanja >= 800000) {
    diskon = 0.15;
} else if (totalBelanja > 500000) {
    diskon = 0.1;
} else if (totalBelanja > 250000) {
    diskon = 0.05;
} else if (totalBelanja < 250000) {
    diskon = 0;
}

const totalBayar = totalBelanja * diskon;
const totalSetelahDiskon = totalBelanja - totalBayar;
const pembayaran = 800000;

console.log(`Harga Headset = Rp. ${headset}`);
console.log(`Harga Mouse = Rp. ${mouse}`);
console.log(`Harga Keyboard = Rp. ${keyboard}`);
console.log("")
console.log(`Total Belanja = Rp. ${totalBelanja}`);
console.log(`Diskon = ${diskon * 100}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${pembayaran - totalSetelahDiskon}`);
