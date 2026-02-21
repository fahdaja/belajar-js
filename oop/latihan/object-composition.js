// membuat superclass yang akan diwariskan ke masing masing subclass nantinya kayak monster, guardian, wizard dan warrior
class Character{
    constructor(name, health, position){
        this.name = name;
        this.health = health;
        this.position = position;
    }
    // dia punya method bawaan class yang bisa di gunakan langsung
    canMove(){
        console.log(`${this.name} bisa berpindah posisi`);
    }
}
// -------------------------------FUNCTION GLOBAL UNTUK SUBCLASS-------------------------------------- //
function canAttack(character) {
    return{
        attack: () => {
            console.log(`${character.name} bisa menyerang dengan senjata`);
        }
    };
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`${character.name} bisa bertahan dengan shield`);
        }
    }
}

function canCastSpell(character){
    return {
        castSpell: () =>{
            console.log(`${character.name} dia punya mantra`);
        }
    }
}

// -------------------------------------------------------------------------------------------------- //

// membuat sebuah object character baru bernama monster yang menerima property turun dari kelas Character(SuperClass)
function createMonster(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}

// membuat sebuah object character baru bernama guardian yang menerima property turun dari kelas Character(SuperClass)
function createGuardian(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
}

// membuat sebuah object character baru bernama wizard yang menerima property turun dari kelas Character(SuperClass)
function createWizard(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
}

// membuat sebuah object character baru bernama warrior yang menerima property turun dari kelas Character(SuperClass)
function createWarrior(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}

// bikin variable baru buat nampung si fungsi createMonster tadi
const monster = createMonster('Monster');
monster.canMove();
monster.attack();

// ...
const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

// ...
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();

// ...
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();