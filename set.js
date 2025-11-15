// cara membuat set kosong
const set = new Set();

console.log(set)

// cara membuat set beserta dengan nilai 
const mySet = new Set([1,2,3])
console.log(mySet)

// cara menyimpan nilai di set menggunakan method add
const newSet = new Set();
newSet.add(1); // argument dengan nilai 1 juga bisa duplikat dan hanya akan 1 data yg tersimpan
newSet.add('apple');
newSet.add(2);
newSet.add('mangga')
console.log(newSet)

// karena cara mengakses nilai set sedikit memiliki perbedaan
// cara mengakses nilai di set menggunakan looping 
// ini cara pertama
const baruSet = new Set();
baruSet.add(1);
baruSet.add(2)

for (const number of baruSet) {
    console.log(number);
}

// cara lain menggunakan foreach
baruSet.forEach((baruSet) => console.log(baruSet));

// menghapus nilai pada set
baruSet.delete(1);
console.log(baruSet);