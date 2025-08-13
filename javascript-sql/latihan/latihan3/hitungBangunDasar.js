function luasPersegi(sisi) {
    return sisi *  sisi;
}

function KelilingPersegi(sisi) {
    return 4 * sisi;
}

function luasPersegiPanjang(p, l) {
    return p * l;
}

function kelilingPersegiPanjang(p, l) {
    return 2 * (p + l);
}

function luasLingkaran(r) {
    const phi = 22/7
    return phi * (r * r);
}

function kelilingLingkaran(r) {
    const phi = 22/7
    return 2 * phi * r;
}

function luasSegitigaSamaSisi(a, t) {
    return 0.5 * a * t;
}

function kelilingSegitigaSamaSisi(sisi) {
    return 3 * sisi;
}

console.log("====== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====")
console.log("")
console.log(">> Luas bangun datar adalah <<")
console.log(`Luas persegi dengan sisi 8 adalah ${luasPersegi(8)}`);
console.log(`Luas persegi panjang dengan panjang 9 dan lebar 3 adalah ${luasPersegiPanjang(9, 3)}`);
console.log(`Luas lingkaran dengan jari - jari 6 adalah ${luasLingkaran(6)}`);
console.log(`Luas Segitiga dengan alas 6 dan tinggi 4 adalah ${luasSegitigaSamaSisi(6, 4)}`);
console.log("");
console.log(">> Keliling Bangun Datar <<")
console.log(`Keliling persegi dengan sisi 8 adalah ${KelilingPersegi(8)}`);
console.log(`Keliling persegi panjang dengan panjang 9 dan lebar 3 adalah ${kelilingPersegiPanjang(9, 3)}`);
console.log(`Keliling lingkaran dengan jari-jari 6 adalah ${kelilingLingkaran(6)}`);
console.log(`Keliling segitiga sama sisi dengan sisi 6 adalah ${kelilingSegitigaSamaSisi(8)}`);
