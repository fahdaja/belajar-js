class CoffeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffe() {
    console.log('Membuat kopi dengan suhu', this.temperature);
  }
}
// seseorang bisa saja jail untuk mengganti temperature suhu untuk membuat coffee jika kita tidak menetapkan nilai temperaturenya 
const coffee = new CoffeMachine(100);
    coffee.temperature = 60

coffee.makeCoffe();


