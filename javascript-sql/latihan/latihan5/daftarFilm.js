const fs = require("fs");

const filePath = "film.json";
let daftarFilm = [];

if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    daftarFilm = JSON.parse(content); // Akan error jika file kosong/tidak valid
}

let filmBaru1 = {
    judul: "Agak Laen",
    tahun: "2012",
    genre: ["Horor", "Komedi"],
};

let filmBaru2 = {
    judul: "Habibie & Ainun",
    tahun: "2012",
    genre: ["Drama", "Romantis"],
};

let filmBaru3 = {
    judul: "Dilan 1990",
    tahun: "2018",
    genre: ["Romantis"],
};

daftarFilm.push(filmBaru1);
daftarFilm.push(filmBaru2);
daftarFilm.push(filmBaru3);

console.log("Daftar Film:");
daftarFilm.forEach((item, i) => {
  console.log(`${i + 1}. ${item.judul} (${item.tahun}) - ${item.genre.join(",")}`);
});

fs.writeFileSync(filePath, JSON.stringify(daftarFilm, null, 2));

