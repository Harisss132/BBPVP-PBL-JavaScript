let buah = [];

buah.push("Apel")
buah.push("Mangga")
buah.push("Jeruk")
buah.push("Semangka")
buah.push("Pisang")
buah.push("Anggur")
buah.push("Nanas")
buah.sort()

buah.forEach(function(nilai, index) {
 console.log(`${index + 1} ${nilai}`)
}) 