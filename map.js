const map = new Map();
console.log(map); // output Map(0) {}
// membuat map constructor dengan data di dalamnya 
const productMap = new Map([
    ['shoes', 500],
    ['cap', 50],
    ['jeans', 100]
]);

console.log(productMap)

// menyimpan nilai ke dalam map ('key', 'value')
const userMap = new Map();
userMap.set('name', 'sam');
console.log(userMap) // output {'name => sam }

// menyimpan key dalam bentuk number
const nomorMap = new Map();
nomorMap.set(1, 'number one');
console.log(nomorMap); // Map(1) { 1 => 'number one' }

// mengakses nilai dari map menggunakan get ('key')
console.log(userMap.get('name')); // output sam
console.log(productMap.get('jeans')); // output 100
console.log(nomorMap.get(1)); // output number one

// menghapus nilai dari map menggunakan method delete ('key')
userMap.set('last name', 'john');
userMap.delete('last name');
console.log(userMap); // output Map(1) { 'name' => 'sam' }