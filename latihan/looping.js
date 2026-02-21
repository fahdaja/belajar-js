// membuat sebuah looping dengan for
for (i = 0; i < 5; i++) {
    console.log(`perulangan ke-${i} adalah ${i}`);
}

// membuat sebuah looping dengan for in
const person = {
    name: 'Fulan',
    age: 20,
    city: 'Jakarta',
};
// nilai konstan pada sebuah ekspresi di for in adalah sebuah key di dalam object dan person adalah variablenya 
for (const property in person) {
    console.log(`${property} ${person[property]}`);
}

// membuat sebuah looping dengan for of
const makanan = ['nasi', 'ayam', 'sayur'];

for (const item of makanan) {
    console.log(item);
}

// sebuah perbedaan for in menggunakan object sedangkan for of menggunakan array 

// membuat sebuah looping dengan while
let u = 0;

while (u < 5) {
    console.log(`perulangan ke-${u} adalah ${u}`);
    u++;
}

// ini adalah program infinit loop
let j = 0;

while (j < 5) {
    console.log(`perulangan ke-${j} adalah ${j}`);
    break; // untuk menghentikan perulangan gunakan break
}

// membuat sebuah perulangan dengan do while
let k = 0;

do{
    console.log(`perulangan ke-${k} adalah ${k}`);
    k++;
}while  (k < 5);

// menggunakan control statement "break" pada looping 
for (i = 0; i<10; i++){
    if (i === 5){
        break; // untuk menghentikan perulangan
    }
}
console.log(i);