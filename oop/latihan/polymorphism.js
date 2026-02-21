class smartPhones{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    charging(){
        console.log(`Charging ${this.model}`)
    }
}


// polymorphism bikin pewarisan baru dari superclass untuk subclass
class Android extends smartPhones{
    constructor(color, brand, model, device){
        super(color, brand, model);
        this.device = device
    }
// bisa juga ngambil method dari superclass untuk dipanggil bersamaan
    charging() {
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

    splitScreen() {
    console.log('Android have a Split Screen');
  }
}

const android = new Android('white', 'B', 'Samsung Galaxy S Fold', 'Smart TV')
android.charging()

