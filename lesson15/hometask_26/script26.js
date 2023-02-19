class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    showHumansInfo() {
      console.log(`Name: ${this.name} / Age: ${this.age}.`);
    }
  }
  
  const jane = new Human("Jane", 25);
  jane.showHumansInfo();
  
  const paul = new Human("Paul", 17);
  paul.showHumansInfo();
  
  const kate = new Human("Kate", 27);
  kate.showHumansInfo();
  
  const alex = new Human("Alex", 32);
  alex.showHumansInfo();
  
  
  class Auto {
    owner;
    constructor(brand, model, yearOfRelease, licensePlate) {
      this.brand = brand;
      this.model = model;
      this.yearOfRelease = yearOfRelease;
      this.licensePlate = licensePlate;
    }
  
    showAutoInfo() {
      console.log(` 
      Auto -
        Brand: ${this.brand} 
        Model: ${this.model} 
        Year of release: ${this.yearOfRelease} 
        LicensePlate: ${this.licensePlate}.`);
    }
  
    addOwner(human) {
      if (human.age < 18) {
        console.log(`${human.name}: cannot be the owner!
     Age: ${human.age} y.o.`);
        return;
      }
      this.owner = human;
    }
  
    showOwner() {
      console.log(`The owner of ${this.brand}: ${this.owner.name}.
      Age: ${this.owner.age} y.o.`);
    }
  }
  
  const nissan = new Auto("Nissan", "Leaf", 2010, "UA E9833HI");
  nissan.showAutoInfo();
  nissan.addOwner(jane);
  nissan.showOwner();
  
  const toyota = new Auto("Toyota", "Prado", 1987, "UA AB2452HH");
  toyota.showAutoInfo();
  toyota.addOwner(paul);
  
  const bmw = new Auto("BMW", "X6", 2007, "UA QUEEN");
  bmw.showAutoInfo();
  bmw.addOwner(kate);
  bmw.showOwner();
  
  const mazda = new Auto("Mazda", "3", 2003, "UA AA1234ZE");
  mazda.showAutoInfo();
  mazda.addOwner(alex);
  mazda.showOwner();
  