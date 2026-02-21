const obj1 = { name : 'Alice'};
const obj2 = { age : 25, city : 'New York'};
const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); 
// output: { name: 'Alice', age: 25, city: 'New York' }

// dapat juga mengcopy salah satu object ke object lain
const originalObj = { ...obj1 };
console.log(originalObj);

// menggunakan spread operator pada array
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl.Batik Kumeli No 50'];
const mergedArray = [...array1, ...array2];

console.log(mergedArray); 
// output: ['Dicoding', 'Indonesia', 'Jl.Batik Kumeli No 50']

// menyalin array menggunakan spread operator
const originalArray = [...array1];
console.log(originalArray); 
// output: ['Dicoding']