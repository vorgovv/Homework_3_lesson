function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function createPromiseWithDelay(value) {
    return new Promise((resolve) => {
      const delay = randomDelay(1000, 5000);
      setTimeout(() => resolve(value), delay);
    });
  }
  
  const promise1 = createPromiseWithDelay(1);
  const promise2 = createPromiseWithDelay(2);
  const promise3 = createPromiseWithDelay(3);
  
  async function getResultFromFirstPromise() {
    const result = await Promise.race([promise1, promise2, promise3]);
    console.log('Первый сработавший промис:', result);
  }
  
  getResultFromFirstPromise();