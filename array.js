//membuat sebuah object constructor pada javascript
const users = new Array();
const numbers = new Array(5);

console.log(users); // []
console.log(numbers); // [ <5 empty items> ]

const fruits = Array.from('hello');
console.log(fruits); // [ 'h', 'e', 'l', 'l', 'o' ]

// array juga dapat dimanfaatkan untuk menyalin array lain
const user = ['Alice', 'Johnson', 'panji', 'peter'];
const customer = Array.from(user);
console.log(customer); // [ 'Alice', 'Johnson', 'panji', 'peter' ]

// membuat array literal pada javascript
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors); // [ 'red', 'green', 'blue', 'yellow' ]

// mengakses sebuah elemen array berdasarkan index
const pengguna = ['sam', 'nietzch', 'uber', 'mensch'];
console.log(pengguna[0]); // output: sam
console.log(pengguna[4]); // output: undefined

// cara manipulasi array
let myArray = ['a', 'b', 'c', 'd']; // array dimulai dari index 0
myArray[1] = 'z'; 
console.log(myArray); // output: [ 'a', 'z', 'c', 'd' ]

// bisa juga menggunakan array push untuk menambahkan elemen baru di akhir array 
myArray.push('e');
console.log(myArray); // output: [ 'a', 'z', 'c', 'd', 'e' ]

// menghapus array pada index 1 
delete myArray[1];
console.log(myArray); // output: [ 'a', <1 empty item>, 'c', 'd', 'e' ]

// menggunakan array splice untuk menghapus element dan datanya pada index 1 dengan jumlah 1 element
myArray.splice(1, 1);
console.log(myArray); // output: [ 'a', 'c', 'd', 'e' ]

// menghapus 2 element pada array
myArray.splice(1, 2);
console.log(myArray); // output: [ 'a', 'e' ]

// menghapus element pertama pada array
myArray.shift();
console.log(myArray); // output: [ 'e' ]

// menghapus element terakhir pada array
myArray.pop();
console.log(myArray); // output: [ ]

// membuat sebuah array Destructuring untuk melihat isi dari array 
const angka = [1, 2, 3];
const [satu, dua, tiga] = angka;
console.log(satu, dua, tiga); // output: 1 2 3

// method array yang sering digunakan dalam kehidupan sehari-hari
const browserArray = ['Chrome', 'Firefox', 'Safari', 'Edge'];
browserArray.reverse();
console.log(browserArray); // [ 'Edge', 'Safari', 'Firefox', 'Chrome' ]

// mengurutkan array dengan method sort
browserArray.sort();
console.log(browserArray); // [ 'Chrome', 'Edge', 'Firefox', 'Safari' ]