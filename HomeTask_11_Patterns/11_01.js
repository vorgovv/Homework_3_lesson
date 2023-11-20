class SweetBuilder {
    constructor(name) {
      this.sweet = new Sweet(name);
    }
  
    setWeight(weight) {
      this.sweet.weight = weight;
      return this;
    }
  
    setSugarLevel(sugarLevel) {
      this.sweet.sugarLevel = sugarLevel;
      return this;
    }
  
    build() {
      return this.sweet;
    }
  }
  
  class SweetFactory {
    createSweet(name) {
      return new SweetBuilder(name);
    }
  }
  
  class ChocolateDecorator {
    constructor(builder) {
      this.builder = builder;
      this.builder.sweet.name = `Шоколадная ${this.builder.sweet.name}`;
    }
  
    setWeight(weight) {
      this.builder.setWeight(weight);
      return this;
    }
  
    setSugarLevel(sugarLevel) {
      this.builder.setSugarLevel(sugarLevel);
      return this;
    }
  
    build() {
      return this.builder.build();
    }
  }
  
  class Sweet {
    constructor(name) {
      this.name = name;
      this.weight = 0;
      this.sugarLevel = 0;
    }
  }
  
  const sweetFactory = new SweetFactory();
  const chocolateCandy = new ChocolateDecorator(sweetFactory.createSweet("Конфета"))
    .setWeight(30)
    .setSugarLevel(35)
    .build();
  
  const caramelCandy = sweetFactory.createSweet("Карамель").setWeight(20).setSugarLevel(20).build();
  
  const childrenGift = [chocolateCandy, caramelCandy];
  
  const totalWeight = childrenGift.reduce((sum, sweet) => sum + sweet.weight, 0);
  
  console.log("Создан детский подарок:");
  childrenGift.forEach(sweet => console.log(`- ${sweet.name}, Вес: ${sweet.weight} г, Уровень сахара: ${sweet.sugarLevel}`));
  console.log(`Общий вес подарка: ${totalWeight} г`);
  
  childrenGift.sort((a, b) => a.sugarLevel - b.sugarLevel);
  
  console.log("Детский подарок после сортировки:");
  childrenGift.forEach(sweet => console.log(`- ${sweet.name}, Вес: ${sweet.weight} г, Уровень сахара: ${sweet.sugarLevel}`));
  
  const minSugarLevel = 20;
  const maxSugarLevel = 30;
  
  const selectedSweets = childrenGift.filter(sweet => sweet.sugarLevel >= minSugarLevel && sweet.sugarLevel <= maxSugarLevel);
  
  console.log(`Конфеты в подарке с уровнем сахара от ${minSugarLevel} до ${maxSugarLevel}:`);
  selectedSweets.forEach(sweet => console.log(`- ${sweet.name}, Вес: ${sweet.weight} г, Уровень сахара: ${sweet.sugarLevel}`));