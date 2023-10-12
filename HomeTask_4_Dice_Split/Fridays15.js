function countFridayThe13ths() {
    const startDate = new Date("2000-01-01");
    const currentDate = new Date();
    let count = 0;
  
    while (startDate < currentDate) {
      if (startDate.getDate() === 13 && startDate.getDay() === 5) {
        count++;
      }
      startDate.setMonth(startDate.getMonth() + 1);
    }
  
    return count;
  }
  
  const friday13Count = countFridayThe13ths();
  console.log(`Количество Пятниц 13-ого с 01/01/2000 до сегодня: ${friday13Count}`);