// deklarasi argumen untuk inputan suhu dalam celsius
const temperature = 25;

// buat sebuah nama function dan masukan parameter temperature
function convertCelsiusToFahrenheit(temperature) {
    // buat sebuah operasi yang mengconvert dari celsius ke fahrenheit pada function body
    const fahrenheit = 9 / 5 * temperature + 32;

    //tampilkan hasil konversi
    console.log('hasil konversi :', fahrenheit)
}

// panggil function lalu masukan argumen nya, argumen nya disini adalah inputan temperature
convertCelsiusToFahrenheit(temperature); 


// function juga bisa bernilai nun kalau argumennya tidak di masukkan 
convertCelsiusToFahrenheit(); 