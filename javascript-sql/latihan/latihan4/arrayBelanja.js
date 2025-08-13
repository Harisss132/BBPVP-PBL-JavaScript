let hargaSepatu = [
    {sepatu: "New Balance NB530", harga: 390000},
    {sepatu: "Nike Vomero 5", harga: 350000},
    {sepatu: "Adidas Samba", harga: 180000},
    {sepatu: "Onitsuka Tiger Mexico", harga: 420000},
]

console.log("===== Rincian belanja sepatu =====");
let total = 0;
hargaSepatu.forEach(function(item, index) {
    console.log(`${index + 1}. ${item.sepatu} - Rp. ${item.harga}`);
    total += item.harga
})

console.log('')
console.log(`Total belanja = Rp. ${total}`)

let diskon = 0

if (total >= 800000) {
    diskon = 0.15
} else if ( total > 500000) {
    diskon = 0.1
} else if (total > 250000) {
    diskon = 0.5
} else {
    diskon = 0
}

console.log(`Diskon = ${diskon * 100}%`)
const totalBayar = total * diskon;
const totalSetelahDiskon = total - totalBayar;
const pembayaran = 1200000;
const kembalian = pembayaran - totalSetelahDiskon

console.log(`Total setelah diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${pembayaran - totalSetelahDiskon}`);

