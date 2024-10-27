// Напишіть функцію makeCounter, яка повертає іншу функцію,
//     яка рахує та виводить у консоль кількість своїх викликів
const makeCounter = (total) => {
  //let total = 0;
  return () => (total += 1);
};
const count = makeCounter(5);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
