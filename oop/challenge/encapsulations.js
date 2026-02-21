class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90
  }

  // set nilai temperature tetap
  set temperature(temperature){
    temperature = this._temperature
    console.log('kamu tidak memiliki izin untuk mengubah temperature mesin kopi');
  }
  get temperature(){
    return this._temperature;
  }
}

const coffee = new CoffeeMachine(10);
console.log('Sebelum diubah:', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah:', coffee.temperature);