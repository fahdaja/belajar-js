// membuat sebuah object literal pada javascript
const user = {
    name : 'Alice', 'last name' : 'Johnson',
    age : 30,
    city : 'New York'
}

// mengakses sebuah properti dari object
console.log(user); 

// mengakses sebuah object berdasarkan key menggunakan dot notation pada key 'name'
console.log(user.name);

// mengakses sebuah properti object yang di simpan ke dalam sebuah variabel
const userName = user;
console.log(userName);

// mengakses sebuah object berdasarkan key lalu disimpan ke dalam variabel
const userAge = user.age;
console.log(userAge);

// mengakses sebuah object menggunakan bracket notation untuk menghindari error pada key yang memiliki spasi 
const userLastName = user['last name'];
console.log(userLastName);

// membuat sebuah object deconstruction untuk mengakses beberapa properti dari object
const {name, city} = user;
console.log(name, city);

// deconstruction object yang key-nya tidak ada akan mengembalikan nilai undefined cara mengatasinya adalah dengan menggunakan parameter false 
const {country = false} = user;
console.log(country); // Output: false

// memanipulasi nilai properti di object 
user.city = 'London'
console.log(user.city)// output London

// terakhir adalah menghapus properti key city yang berada di dalam object
delete user.city;
console.log(user) 