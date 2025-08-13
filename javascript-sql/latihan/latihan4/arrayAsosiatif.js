let tinggi = [
    {nama: "Rose", tinggi: "178cm"},
    {nama: "Magnolia", tinggi: "153cm"},
    {nama: "Daisy", tinggi: "165cm"},
    {nama: "Jasmine", tinggi: "161cm"},
    {nama: "Violet", tinggi: "159cm"},
]

tinggi.forEach(function(item) {
    console.log(`${item.nama} memiliki tinggi ${item.tinggi}`);
})