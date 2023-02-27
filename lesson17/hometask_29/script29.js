class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_BIG = { price: 100, calories: 40 };
  
    static STUFFING_CHEESE = { price: 10, calories: 20 };
    static STUFFING_SALAD = { price: 50, calories: 5 };
    static STUFFING_POTATO = { price: 15, calories: 10 };
  
    static TOPPING_SAUSE = { price: 15, calories: 0 };
    static TOPPING_MAYO = { price: 20, calories: 5 };
  
    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.topping = [];
    }
  
    addTopping(top) {
      this.topping.push(top);
    }
  
    calculate() {
      let calories = this.size.calories + this.stuffing.calories;
      this.topping.forEach((top) => {
        calories += top.calories;
      });
      return calories;
    }
  
    calculatePrice() {
      let price = this.size.price + this.stuffing.price;
      this.topping.forEach((top) => {
        price += top.price;
      });
      return price;
    }
  }
  
  // маленький гамбургер з начинкою з сиру
  const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
  );
  
  // добавка з майонезу
  hamburger.addTopping(Hamburger.TOPPING_MAYO);
  
  // запитаємо скільки там калорій
  console.log("Calories: " + hamburger.calculate());
  
  // скільки коштує
  console.log("Price: " + hamburger.calculatePrice());
  
  // я тут передумав і вирішив додати ще приправу
  hamburger.addTopping(Hamburger.TOPPING_SAUSE);
  
  // А скільки тепер коштує?
  console.log("Price with sauce: " + hamburger.calculatePrice());
  