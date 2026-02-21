// buat sebuah nama function dan masukan parameter temperature
function convertCelsiusToFahrenheit(temperature = 50) {
    
if (temperature !== undefined) {
    const fahrenheit = 9 / 5 * temperature + 32;

    //tampilkan hasil konversi
    console.log('hasil konversi :', fahrenheit)
    }
}
// jika argumen tidak ada maka bisa panggil fungsi yang argumennya sudah di ubah ke 50
convertCelsiusToFahrenheit(); 
// tapi bisa juga mengisi argumen dengan nilai tertentu seperti di bawah ini
convertCelsiusToFahrenheit(25);


// kesimpulan : 
// nilai default ini nilainya tidak tetap/tidak konstan dan bisa di panggil bersamaan dan nilai nya berubah.
// jadi tergantung kamu mau pakai gaya yang mana