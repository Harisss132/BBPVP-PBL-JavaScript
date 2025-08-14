function bagiAngka (a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa di bagi nol!!")
        }
        let hasil = a / b;
        console.log(`Hasil dari ${a} / ${b} adalah : ${hasil}`)
    } catch(error) {
        console.log(`Error: ${error.message}`)
    }
}

let angka1 = 10;
let angka2 = 0;

try {
    bagiAngka(angka1, angka22)
} catch(error) {
    console.log(`Error: ${error.message}`)
}
console.log("Program Selesai.")