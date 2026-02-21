// throw and exception 
const error = new Error('Terjadi error');
//console.error(error);

// pembayaran kurang 
// const price = 100;
// const paid = 80;

// if(paid < price){
//     throw new Error('Pembayaran kurang');
// }

// masuk ke bagian try and catch 
try {
    console.log('Mencoba menjalankan kode');
    console.log('Kode berhasil dijalankan');
} catch (error){
    console.log('karena tidak ada eror, maka catch tidak dijalankan');
}

// contoh penggunaan try catch dengan error
try {
    console.log('Mencoba menjalankan kode');
    throw new Error('Terjadi error saat menjalankan kode');
    console.log('Kode berhasil dijalankan'); // tidak akan di jalankan karena ada error di atas
} catch (error){
    console.log('jika terjadi error, maka kode di dalam catch akan dijalankan');
}

// contoh penggunaan try catch dengan error dan finally
try {
  console.log('Ini try block');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}