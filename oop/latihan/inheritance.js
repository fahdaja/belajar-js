class smartPhones {
    constructor(color, brand, model){
    this.color = color;
    this.brand = brand;
    this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`)
    }
}

class iOS extends smartPhones{
    airDrop(){
        console.log(`IOS punya airdrop mode`)
    }
}

class Android extends smartPhones{
    splitScreen(){
        console.log(`kalo android bisa split screen`)
    }
}

const ios = new iOS('White', 'A', '12 Pro Max')
const android = new Android('Black', 'B', 'Samsung Galaxy 10 Pro')

ios.charging()
ios.airDrop()

android.charging()
android.splitScreen()