// --створити масив та вивести його в консоль:
// - з 5 числових значень

// let numbers = [10, 2, -8, 9, 12];
// console.log(numbers);

// - з 5 стічкових значень

// let str = ["car", "work", "cinema", "football", "task"];
// console.log(str);

// - з 5 значень стрічкового, числового та булевого типу

// let all = [2, "work", 10, true, "task"];
// console.log(all);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let zero = [];
// zero[0] = "sport";
// zero[2] = 2;
// zero[3] = false;
// zero[5] = 4;
// zero[7] = "end";
// console.log(zero);

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//
// let dog = {
//     nickname: "Vinny",
//     color: "grey",
//     paws: 4,
//     collar: true,
//     graft: false
// }
// let human = {
//     name: "Roman",
//     age: 30,
//     hobby: 'football',
//     gender: "man",
//     working: true,
// }
// let car = {
//     make: "Renault",
//     model: "Clio",
//     year: 2009,
//     color: "red",
//     driver: true
// }
// let apartment = {
//     rooms: 2,
//     owner: true,
//     footage: 50,
//     floor: 6,
//     walls: "brick"
// }
// let book = {
//     pages: 547,
//     language: 'English',
//     price: 200,
//     autor: 'Nazar Smalyichuk',
//     cover: true
// }

// -- Створити масив та вивести його в консоль:
// - з 5 собак

// let dogs = ["Villy", "Charly", "Bigbos", "Bobik", "Nika"];
// console.log(dog);

// - 3 5 людей

// let people = ["Roman", "Irina", "Pavlo", "Oleg", "Olya"];
// console.log(people);

// - з 5 автомобілів

// let cars = ["Nissan", "Renault", "BMV", "Opel", "Fiat"];
// console.log(cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// let house = {
//     storey: 2,
//     rooms: 5,
//     furniture: ["sofa", "cupboard", "table"],
//     window: {
//         quantity: 7,
//         material: "metal plastic"
//     };
// };

// let driver = {
//     cars: "Renault",
//     model: "Clio",
//     categories: ["A", "B", "C"],
//     features: {
//         length: 2400,
//         weight: 1.2,
//         color: "red"
//     }
// };

// let toy = {
//     view: "doll",
//     owner: "Irina",
//     category: ["1+", "5+", "9+"],
//     features: {
//         material: "rubber",
//         height: 30,
//         color: "transparent"
//     }
// };

// let table = {
//     purpose: "kitchen",
//     owner: "Roman",
//     accessories: ["chairs", "tablecloth", "box"],
//     features: {
//         material: "oak",
//         legs: 4,
//         color: "white"
//     }
// };

// let handbag = {
//     manufacturer: "Kors",
//     owner: "Olya",
//     accessories: ["trinket", "holder"],
//     features: {
//         material: "leather",
//         color: "blue"
//     }
// };

// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// console.log(users[7].status);

// - статус Максима

// console.log(users[4].status);

// - ім'я передостаннього об'єкту

// console.log(users[9].name);

// - ім'я третього об'єкта

// console.log(users[2].name);

// - вік Олега

// console.log(users[6].age);

// - вік Олі

// console.log(users[3].age);

// - вік + ім'я 5го об'єкта

// console.log(users[4].age + " " + users[4].name);

// - вік + сатус Анни

// console.log(users[5].age + " " + users[5].name);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл task2_template.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

// let text = document.getElementById("content").textContent;

// - отримує текст з блоку з id "rules"

// let text = document.getElementById("rules").textContent;

// - замініть текст параграфа з id 'content' на будь-який інший

// let text = document.getElementById("content").textContent = "Hello World!";

// - замініть текст параграфа з id 'rules' на будь-який інший

// let text = document.getElementById("rules").textContent = "Hello World!";

// - змініть кожному елементу колір фону на червоний

// let text1 = document.getElementById("content").style.backgroundColor = "red";
// let text2 = document.getElementById("rules").style.backgroundColor = "red";
// let text3 = document.getElementsByTagName("ul");
// text3[0].style.backgroundColor = "red";

// - змініть кожному елементу колір тексту на синій

// let text1 = document.getElementById("content").style.color = "blue";
// let text2 = document.getElementById("rules").style.color = "blue";
// let text3 = document.getElementsByTagName("ul");
// text3[0].style.color = "blue";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let = listId = document.getElementById("rules").className;
// console.log(listId);

// - отримати всі елементи з класом fc_rules

// let = list = document.getElementsByClassName('fc_rules');
// console.log(list);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

// let text = document.getElementsByClassName("fc_rules");
// text[0].style.color = "red";
// text[1].style.color = "red";
// text[2].style.color = "red";
// text[3].style.color = "red";

//
// ====================
// ====================
// ====================
//

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let numbers = [2,17,13,6,22,31,45,66,100,-1];

// 1. перебрати його циклом while

// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// };

// 2. перебрати його циклом for

// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// };

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 1;
// while (i < numbers.length) {
//     console.log(numbers[i++]);
//     i++;
// };

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (i = 1; i < numbers.length; i++) {
//     console.log(numbers[i++]);
// };

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i++]);
//     i++;
// };

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i = 0; i < numbers.length; i++) {
//     console.log(numbers[i++]);
// };

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         numbers[i] = "okten";
//     }
// };

// 8. вивести масив в зворотньому порядку.

// a = numbers.reverse();
// console.log(a);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = numbers.length-1;
// while (i > -1) {
//     console.log(numbers[i]);
//     i--;
// };

// for (i = numbers.length-1; i > -1; i--) {
//     console.log(numbers[i]);
// };

// let i = numbers.length-1;
// while (i > -1) {
//     console.log(numbers[i--]);
//     i--;
// };

// for (i = numbers.length-1; i > -1; i--) {
//     console.log(numbers[i--]);
// };

// let i = numbers.length;
// while (i > -1) {
//     console.log(numbers[i--]);
//     i--;
// };

// for (i = numbers.length; i > -1; i--) {
//     console.log(numbers[i--]);
// };

// 10 створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// let start = 0;
// let result = [];
// while (start < 100) {
//     start = start+2;
//     result.push(start);
// };
// console.log(result);

// - заповнити його 50 непарними числами за допомоги циклу.

// let start = -1;
// let result = [];
// while (start < 99) {
//     start = start+2;
//     result.push(start);
// };
// console.log(result);
// 1 створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.

// let start = 0;
// let result = [];
// while (start < 100) {
//     start = start+2;
//     result.push(start);
// };
// console.log(result);

// 2. заповнити його 50 непарними числами за допомоги циклу.

// let start = -1;
// let result = [];
// while (start < 99) {
//     start = start+2;
//     result.push(start);
// };
// console.log(result);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.

// let result = [];
// for (let i = 0; i < 100; i++) {
//     result[i] = Math.floor(Math.random()*100);
// }

// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let = result = [];
// for (let i = 0; i < 100; i++) {
//     result[i] = Math.round(Math.random()*732 - 8 +8);
// }

// 2. вывести на консоль  каждый третий елемент

// let elements = [];
// for (let i = 0; i < result.length; i+=3) {
//     elements.push(result[i]);
// }

// 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.

// let elements = [];
// for (let i = 0; i < result.length; i+=3) {
//     if (result[i]%2 === 0) {
//         elements.push(result[i]);
//     }
// };

// 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.

// let elements = [];
// for (let i = 0; i < result.length; i+=3) {
//     if (result[i]%2 === 0) {
//         elements.push(result[i]);
//     }
// };

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
//
// let elements = [];
// for (let i = 0; i < result.length; i++) {
//     if (result[i+1]%2 === 0) {
//         elements.push(result[i]);
//     }
// };

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// function arrSum(array) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i];
//     }
//     console.log(sum);
//     let check = sum / arr.length;
//     console.log(check);
// }
// arrSum(arr);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrRandom = [];
// for (let i = 0; i < 100; i++) {
//     arrRandom[i] = Math.floor(Math.random()*100);
// }
// console.log(arrRandom);
// let = arrResult = [];
// for (let i = 0; i < arrRandom.length; i++) {
//     arrResult.push(arrRandom[i]*5);
// }

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.

// let arrMix = [true, 3, "corona", 2, false, 9, 12, 10, "football", 21];
// let arr = [];
// for (let i = 0; i < arrMix.length; i++) {
//     if (typeof arrMix[i] == "number") {
//         arr.push(arrMix[i]);
//     }
// };
// console.log(arr);