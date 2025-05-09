// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let numbers1 = [1, 2, 3];
numbers1[1] = 10;
console.log("1:", numbers1);

// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let strings1 = ["apple", "banana", "cherry"];
strings1.push("date");
console.log("2:", strings1);

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
let numbers2 = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}
console.log("3: Сума чисел =", sum);

// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let numbers3 = [3, 7, 1, 9, 2];
console.log("4: Всі елементи масиву:");
for (let i = 0; i < numbers3.length; i++) {
  console.log(numbers3[i]);
}

// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
let strings2 = ["short", "longer", "apple", "banana", "extraordinary"];
console.log("5: Рядки з довжиною більше 5:");
for (let i = 0; i < strings2.length; i++) {
  if (strings2[i].length > 5) {
    console.log(strings2[i]);
  }
}

// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let numbers4 = [10, 3, 27, 42, 18, 35, 6, 90, 11, 28];
let max = numbers4[0];
for (let i = 1; i < numbers4.length; i++) {
  if (numbers4[i] > max) {
    max = numbers4[i];
  }
}
console.log("6: Максимальне значення =", max);

// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let numbers5 = [12, 7, 4, 9, 10, 21, 18, 5, 6, 13];
console.log("7: Парні числа:");
for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] % 2 === 0) {
    console.log(numbers5[i]);
  }
}
