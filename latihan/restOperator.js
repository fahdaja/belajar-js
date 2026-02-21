//rest operator digunakan untuk menggabungkan beberapa argumen menjadi satu array
function myFunction(...name){
    console.log('name:', name);
}

myFunction('panji', 'peter', 'john');
// output: name: [ 'panji', 'peter', 'john' ]

// rest parameter juga nilainya tidak berubah meskipun argumen yang dimasukan berbeda-beda misal jika nilai number yang di isi adalah one dalam bentuk string

function myFunc(number, ...names){
    console.log('number:', number);
    console.log('names:', names);
}
myFunc('one', 'panji', 'peter', 'john');
// output: 
// number: one
// names: [ 'panji', 'peter', 'john' ]

// array length pada rest parameter
function myfungsi(...nama){
    console.log(nama.length);
    console.log('name',nama);
}

myfungsi('panji', 'peter', 'john', 'samuel');
// output: 
// 4
// name [ 'panji', 'peter', 'john', 'samuel' ]

const favorite = ['seafood', 'salad', 'nugget', 'soup'];

const [first, second, ...rest] = favorite;

console.log(first);
console.log(second);
console.log(rest);
// output:
// seafood
// salad
// [ 'nugget', 'soup' ]

