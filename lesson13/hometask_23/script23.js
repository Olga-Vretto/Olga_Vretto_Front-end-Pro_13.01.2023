const auto = {
  drive() {
    console.log(`${this.brand} can drive`);
  },
  brake() {
    console.log(`${this.brand} can brake`);
  },
  openDoor() {
    console.log(`${this.brand} opens doors ${this.openDoors} way `);
  },
  openDoors: "horizontal",
};

function Auto(brand) {
  this.brand = brand;
}

Auto.prototype = auto;

const porsche = new Auto("Porsche");
const tesla = new Auto("Tesla");
const lamborghini = new Auto("Lamborghini");

lamborghini.openDoors = "verical";

console.log(porsche);
console.log(tesla);
console.log(lamborghini);

porsche.openDoor();
tesla.openDoor();
lamborghini.openDoor();
