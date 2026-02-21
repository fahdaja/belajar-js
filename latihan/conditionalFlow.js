// percabangan if else
const gajian = true;

console.log("berjalan jalan di mal");

if(gajian){
    console.log("makan enak di restoran");
}
console.log("kembali ke rumah");

// bisa juga di pakai else untuk pengecekan kondisi lain
const ujian = 80;

if(ujian >= 80){
    console.log("selamat anda lulus");
}else {
    console.log("maaf anda tidak lulus");
}

// jika memiliki cabang kondisi lebih dari 2
const score = 80;

if(score >= 90 ){
    console.log("selamat anda lulus, dengan nilai A");
}else if(score >= 80){
    console.log("selamat anda lulus");
}else {
    console.log("maaf anda tidak lulus");
}

// conditional (ternary) operator
const price = 15000;
const isMember = false;
const discount = isMember ? 0.1 : 0;

console.log(`Total harga yang harus dibayar adalah ${discount * price}`);

// membuat sebuah conditional function dengan switch case

const fruit = 'orange';


switch(fruit){
    case 'apel':
        console.log("aku adalah buah apel");
        break;
    case 'mangga':
        console.log("aku adalah buah mangga");
        break;
    case 'pisang':
        console.log("aku adalah buah pisang");
        break;
    default:
        console.log("aku bukan buah apel, mangga, atau pisang, melainkan sang pemrogram");
}

// kesimpulan
// 1. if else digunakan untuk percabangan kondisi yang sedikit misal 1 atau 2 kondisi
// 2. conditional (ternary) operator digunakan untuk kondisi sederhana
// 3. switch case digunakan untuk banyak cabang kondisi (kompleks)