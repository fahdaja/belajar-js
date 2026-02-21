const readline = require('readline')

class Mobil {
    constructor(engine, roda, setir) {
        this.engine = engine;
        this.roda = roda;
        this.setir = setir;
        this.gear = 'P'; // Default posisi P (Parking) atau lagi Berhenti
    }
    canMoveForward() {
        console.log(`[Gear ${this.gear}] Mobil Melaju`)
    }
    canMoveBack() {
        console.log(`[Gear ${this.gear}] Mobil Mundur `)
    }
    canStop() {
        console.log(`[Gear ${this.gear}] Mobil berhenti`)
    }
    pindahGigi(aksi) {
        if (typeof aksi !== 'string') {
            console.log('Input gear harus string (contoh: R, D, P, N).')
            console.log('')
            return
        }
        // kita disini nampung sebuah aksi ke dalam variable cmd yang dimana fungsinya adalah merubah huruf alfabet kecil menjadi huruf alfabet Besar dan menangkap output dari fungsi uppercase
        const cmd = aksi.toUpperCase().trim()
        // ini command yang di izinkan untuk method maju
        const forwardCommands = ['D', '1', '2', '3', '4']

        // ini adalah sebuah pengkondisian gear pada mobil
        if (cmd === 'R') {
            this.gear = cmd
            console.log(`--- Gearbox berubah ke: ${this.gear} ---`)
            this.canMoveBack()
            // disini saya melakukan sanitasi command yang di izinkan dari variable cmd
        } else if (forwardCommands.includes(cmd)) {
            this.gear = cmd
            console.log(`--- Gearbox berubah ke: ${this.gear} ---`)
            this.canMoveForward()
        } else if (cmd === 'P' || cmd === 'N') {
            this.gear = cmd
            console.log(`--- Gearbox berubah ke: ${this.gear} ---`)
            this.canStop()
        } else {
            console.log(`Input '${aksi}' tidak dikenali. Gunakan R (Reverse) atau D/1/2/3 (Drive).`)
        }
        console.log('') // Empty line untuk readability
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const mobil = new Mobil('on', 'ada', 'ada');

rl.question("Masukkan input Gear mobil: ", function(inputAksi){
    mobil.pindahGigi(inputAksi);

    rl.close();
})

