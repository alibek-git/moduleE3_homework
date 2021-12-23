function primeNumberTest(number){
  // Задаём булевую переменную, по умолчанию истина
  let isPrime = true;
  
  // Проверка на то, что число положительное, не единица и не больше тысячи
  if (number === 1 || number < 0 || number > 1000 || typeof(number) !== 'number'){
    console.log('Please enter a number between 2 and 1000')
  }
  
  else {
    // Если число в диапазоне от 2 до 1000
    // Начинаем отсчёт от 2 до заданного числа, если остаток от деления равен нулю, выходим из цикла, булевое значение становится ложью
    for (let i = 2; i < number; i += 1){
      if (number % i == 0){
        isPrime = false;
        break
      }
    }
    if (isPrime){
      console.log(`${number} is a prime number`);
    }
    else {
      console.log(`${number} is not a prime number`);
    }
  }
}

primeNumberTest(18)