// function dengan regular function
const convertCelsiusToFahrenheitReguler = function(temperature) {
    const fahrenheit = (9/5) * temperature + 32;
    return fahrenheit;
}

const tempInFahrenheitReguler = convertCelsiusToFahrenheitReguler(25);
console.log('hasil konversi reguler :',tempInFahrenheitReguler); // Output: 77


// function dengan arrow function 
const convertCelsiusToFahrenheit = (temperature) => {
    const fahrenheit = (9/5) * temperature + 32;
    return fahrenheit;
}

const tempInFahrenheit = convertCelsiusToFahrenheit(25);
console.log('hasil konversi arrow function :',tempInFahrenheit); // Output: 77


// arrow function lebih ringkas
const convertCelsiusToFahrenheitSimple = temperature => (9/5) * temperature + 32;

const tempInFahrenheitSimple = convertCelsiusToFahrenheitSimple(25);
console.log('hasil konversi arrow function simple :',tempInFahrenheitSimple); // Output: 77 

// catatan :
// 1. expression selalu berupa perhitungan yang menghasilkan nilai atau value = (9/5) * temperature + 32
// 2. jika hanya ada satu parameter, tanda kurung bisa dihilangkan
// 3. jika hanya ada satu expression, kurung kurawal dan kata kunci return bisa dihilangkan