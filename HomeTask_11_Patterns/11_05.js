class CarFactory {
    createCar(model, fuelConsumption, price) {
      return new Car(model, fuelConsumption, price);
    }
  }
  
  class Car {
    constructor(model, fuelConsumption, price) {
      this.model = model;
      this.fuelConsumption = fuelConsumption;
      this.price = price;
    }
  }
  
  class TaxiPark {
    constructor() {
      this.cars = [];
    }
  
    addCar(car) {
      this.cars.push(car);
    }
  
    calculateTotalCost() {
      return this.cars.reduce((total, car) => total + car.price, 0);
    }
  
    sortByFuelConsumption() {
      this.cars.sort((a, b) => a.fuelConsumption - b.fuelConsumption);
    }
  
    findCarInPriceRange(minPrice, maxPrice) {
      return this.cars.filter(car => car.price >= minPrice && car.price <= maxPrice);
    }
  }
  
  const carFactory = new CarFactory();
  
  const sedan = carFactory.createCar("Sedan", 8, 20000);
  const suv = carFactory.createCar("SUV", 12, 30000);
  const hatchback = carFactory.createCar("Hatchback", 6, 18000);
  
  const taxiPark = new TaxiPark();
  taxiPark.addCar(sedan);
  taxiPark.addCar(suv);
  taxiPark.addCar(hatchback);
  
  console.log("Таксопарк:");
  taxiPark.cars.forEach(car => console.log(`- ${car.model}, Расход топлива: ${car.fuelConsumption} л/100км, Цена: ${car.price} USD`));
  
  const totalCost = taxiPark.calculateTotalCost();
  console.log(`Общая стоимость таксопарка: ${totalCost} USD`);
  
  console.log("Таксопарк после сортировки по расходу топлива:");
  taxiPark.sortByFuelConsumption();
  taxiPark.cars.forEach(car => console.log(`- ${car.model}, Расход топлива: ${car.fuelConsumption} л/100км, Цена: ${car.price} USD`));
  
  const minPrice = 19000;
  const maxPrice = 25000;
  const selectedCars = taxiPark.findCarInPriceRange(minPrice, maxPrice);
  
  console.log(`Автомобили в заданном диапазоне цен (${minPrice} - ${maxPrice} USD):`);
  selectedCars.forEach(car => console.log(`- ${car.model}, Расход топлива: ${car.fuelConsumption} л/100км, Цена: ${car.price} USD`));