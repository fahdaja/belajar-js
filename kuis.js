function hello (name, origin = 'Bandung') {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

const rahmat = hello('Rahmat', 'Semarang');
console.log(rahmat);
const budi = hello('Budi');
console.log(budi);