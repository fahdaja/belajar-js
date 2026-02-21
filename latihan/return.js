// ini adalah contoh fungsi return value dari hasil penjumlahan
function sumNumbers(a,b){
    const result = a + b;
    return result;
}

const result = sumNumbers(5, 10);
console.log(result); // Output: 15

// ini adalah contoh fungsi return value jika ada penguncian nilai kembalian
function generateGreetingWorldMessage() {
  return 'Halo, dunia!'; // return ini fungsinya mengunci kembalian nilai dari function
  console.log('Aku tidak akan tampil!'); // console.log ini tidak akan dieksekusi
}
 
const message = generateGreetingWorldMessage();
console.log(message);

// ini adalah contoh fungsi return value dari fahrenheit
function convertCelsiusToFahrenheit(temperature){
    const result = (9/5) * temperature + 32;
    return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(25); // function kedalam sebuah variable konstan baru 
console.log('hasil konversi :', temperatureInFahrenheit); // lalu tampilkan hasilnya
