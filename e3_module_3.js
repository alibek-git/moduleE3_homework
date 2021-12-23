//Написать функцию, которая принимает число как аргумент и возвращает функцию, 
//которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
//Выведите в консоль результат.

function outterFunc(a, b) {
  function innerFunc(x) {
    return x;
  }
  return innerFunc(a) + innerFunc(b);
}
a = outterFunc(2, 3);
b = outterFunc(3, 4);
c = outterFunc(4, 5);

console.log(a)
console.log(b)
console.log(c)
