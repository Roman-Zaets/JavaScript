// - створити функцію яка виводить масив

// let arr = [1, false, 5, 'Hello'];
// function printArray(array) {
//     console.log(array);
// }
// printArray(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function emptyArray() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         n = Math.round(Math.random() * 100);
//         arr.push(n);
//     }
//     printArray(arr);
// }
// emptyArray();

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function numbersMin(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//         return a;
//     }
//     else if (b < a && b < c) {
//         console.log(b);
//         return b;
//     }
//     else {
//         console.log(c);
//         return c;
//     }
// }
// numbersMin(5, 22 ,11);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function numbersMax(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//         return b;
//     }
//     else {
//         console.log(c);
//         return c;
//     }
// }
// numbersMax(5, 22 ,31);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function arg() {
//     let max = Math.max.apply(Math, arguments);
//     console.log(max)
//
//     let min = Math.min.apply(Math, arguments);
//     return min;
// }
// arg(5, 27, 19, 12);

// - створити функцію яка виводить масив

// let arr = [1, false, 5, 'Hello'];
// function printArray(array) {
//     console.log(array);
// }
// printArray(arr);

// - створити функцію яка повертає найбільше число з масиву

// let num = [90, 23, 8, 120, 7, 45];
// function maxNum(array) {
//     let max = Math.max.apply(Math, num);
//     console.log(max);
//     return max;
// }
// maxNum();

// - створити функцію яка повертає найменьше число з масиву

// let num = [90, 23, 8, 120, 7, 45];
// function minNum(array) {
//     let min = Math.min.apply(Math, num);
//     console.log(min);
//     return min;
// }
// minNum();

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let num = [90, 23, 8, 121, 7, 45];
// function numSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     console.log(sum);
//     return sum;
// }
// numSum(num);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let num = [90, 23, 8, 121, 7, 45];
// function average(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     let x = sum / array.length;
//     console.log(x);
//     return x;
// }
// average(num);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: true},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
//
// function arr (array) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] == "object") {
//             counter++;
//         }
//     }
//     return counter;
// }
// let bringOut = arr(usersWithId);
// console.log(bringOut);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
//
// function arr (array) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "object") {
//             for (let kay in array[i]) {
//                 counter++
//             }
//         }
//     }
//     return counter;
// }
// let bringOut = arr(usersWithId);
// console.log(bringOut);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// function newArray(array) {
//     let arr1 = [5, 7, 13, 2];
//     let arr2 = [3, 8, 14, 4];
//     let arrNew = [];
//
//     for (let i = 0; i < arr1.length; i++) {
//         let x = arr1[i] + arr2[i];
//         arrNew.push(x);
//     }
//     console.log(arrNew)
//     return arrNew;
// }
// newArray();

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arr = [15, 7, 13, 2, 7, 9];
//
// function changeElement(array, i) {
//     let temporaryNum = array[i] + 1;
//     array.splice(i, 1, temporaryNum);
//     console.log(arr);
// }
// changeElement(arr, 3);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1, 8, 0,6,0,3];
//
// function movingElement(array) {
//     let arrNew1 = [];
//     let arrNew2 = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             arrNew1.push(array[i]);
//         } else {
//             arrNew2.push(array[i]);
//         }
//     }
//     let arrNew = arrNew2.concat(arrNew1);
//     console.log(arrNew);
//     return arrNew;
// }
// movingElement(arr);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function helloOwu() {
//     let div = document.createElement("div");
//     div.innerText = "Hello OWU";
//     document.body.appendChild(div);
// }
// helloOwu();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function helloOwu(element, text) {
//     let xxx = document.createElement(element);
//     xxx.innerText = text;
//     document.body.appendChild(xxx);
// }
// helloOwu('h2', 'HELLO OWU');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

let cars = [
    Renault = {
        model: "Renault Clio",
        year: 2009,
        motor: "petrol",
        color: "red"
    },
    Honda = {
        model: "Honda Accord",
        year: 2017,
        motor: "diesel",
        color: "white"
    },
    Chevrolet = {
        model: "Chevrolet Volt",
        year: 2020,
        motor: "electric",
        color: "green"
    },
    Fiat = {
        model: "Fiat Tipo",
        year: 2018,
        motor: "diesel",
        color: "blue"
    },
    Ford = {
        model: "Ford Focus",
        year: 2010,
        motor: "petrol",
        color: "black"
    },
    KIA = {
        model: "KIA Ceed",
        year: 2012,
        motor: "petrol",
        color: "pink"
    },
    Hyundai = {
        model: "Hyundai i30",
        year: 2015,
        motor: "electric",
        color: "grey"
    },
    BMW = {
        model: "BMW X7",
        year: 2020,
        motor: "diesel",
        color: "lime"
    },
    Audi = {
        model: "Audi Q3",
        year: 2018,
        motor: "petrol",
        color: "yellow"
    },
    Opel = {
        model: "Opel Corsa",
        year: 2008,
        motor: "diesel",
        color: "purple"
    },
];

// function arrayCars(array, id) {
//     let idshka = document.getElementById(id);
//     let ul = document.createElement("ul");
//     for (let i = 0; i < array.length; i++) {
//         let li = document.createElement("li");
//         li.innerHTML = array[i].model;
//         ul.appendChild(li);
//     }
//     idshka.appendChild(ul);
// }
//
// arrayCars(cars, "cars");

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// function arrayCars(array, id) {
//     let idshka = document.getElementById(id);
//     for (let i = 0; i < array.length; i++) {
//         let div = document.createElement("div");
//         let ul = document.createElement("ul");
//         let li1 = document.createElement("li");
//         let li2 = document.createElement("li");
//         let li3 = document.createElement("li");
//         let li4 = document.createElement("li");
//         li1.innerHTML = `Model: ${cars[i].model}`;
//         li2.innerHTML = `Year: ${cars[i].year}`;
//         li3.innerHTML = `Motor: ${cars[i].motor}`;
//         li4.innerHTML = `Color: ${cars[i].color}`;
//         ul.appendChild(li1);
//         ul.appendChild(li2);
//         ul.appendChild(li3);
//         ul.appendChild(li4);
//         div.appendChild(ul);
//         idshka.appendChild(div);
//     }
// }
//
// arrayCars(cars, "cars");

// Для кожної властивості створити всередені блока автомоблія свій блок

// function arrayCars(array, id) {
//     let idshka = document.getElementById(id);
//     for (let i = 0; i < array.length; i++) {
//         let div = document.createElement("div");
//         let divBr = document.createElement("br")
//         let divModel = document.createElement("div");
//         let divYear = document.createElement("div");
//         let divMotor = document.createElement("div");
//         let divColor = document.createElement("div");
//         divModel.innerHTML = `Model: ${cars[i].model}`;
//         divYear.innerHTML = `Year: ${cars[i].year}`;
//         divMotor.innerHTML = `Motor: ${cars[i].motor}`;
//         divColor.innerHTML = `Color: ${cars[i].color}`;
//         div.appendChild(divModel);
//         div.appendChild(divYear);
//         div.appendChild(divMotor);
//         div.appendChild(divColor);
//         div.appendChild(divBr)
//         idshka.appendChild(div);
//     }
// }
//
// arrayCars(cars, "cars");

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з
// відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
// let usersWithCities = [];
//
// function associationObject(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i].id === array2[j].user_id) {
//                 array1[i].adress = array2[j];
//                 usersWithCities.push(array1[i]);
//             };
//         };
//     }
// }
// associationObject(usersWithId, citiesWithId);
// console.log(usersWithCities);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// function createStructure(array) {
//
//     let mainDiv = document.createElement("div");
//     for (let i = 0; i < rules.length; i++) {
//         let div = document.createElement('div');
//         let h2 = document.createElement('h2');
//         let p = document.createElement("p");
//
//         div.className = `rules ${i}`;
//         h2.innerText = array[i].title;
//         p.innerText = array[i].body;
//
//         div.appendChild(h2);
//         div.appendChild(p);
//
//         mainDiv.appendChild(div);
//     }
//
//     document.body.appendChild(mainDiv);
// }
// createStructure(rules);

