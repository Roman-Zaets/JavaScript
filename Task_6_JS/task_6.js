// - создать массив с 20 числами.

// let numbers = [10, 21, -2, 7, 18, 28, 39, -17, 0, 41, -82, 23, 5, 46, 81, 139, -174, 3, 30, 6];

// -- при помощи метода sort отсортировать массив.

// let sortArray = numbers.sort(function (a, b) {
//     return a-b;
// });
// console.log(sortArray);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let sortArrayFlowing = numbers.sort((a,b) => b - a);
// console.log(sortArrayFlowing);

// -- при помощи filter получить числа кратные 3

// let filterArray3 = numbers.filter(function (num) {
//     if (num % 3 === 0) {
//         return num;
//     }
// });
// console.log(filterArray3);

// -- при помощи filter получить числа кратные 10

// let filterArray10 = numbers.filter(function (num) {
//     if (num % 10 === 0) {
//         return num;
//     }
// });
// console.log(filterArray10);

// -- перебрать (проитерировать) массив при помощи foreach()

// numbers.forEach(num => console.log(num));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let mapArray = numbers.map(function (num) {
//     return num*3;
// });
// console.log(mapArray);

// - создать массив со словами на 15-20 элементов.

// let  wordsArray = ['name', 'hello', 'owu', 'pink', 'city', 'super', 'good', 'live', 'speech', 'lime', 'popUp',
//                     'prepare', 'ready', 'song', 'yellow', 'color', 'standard', 'array', 'form', 'car'];

// -- отсортировать его по алфавиту в восходящем порядке.

// let wordsArraySort = wordsArray.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(wordsArraySort);

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let wordsArraySortFlowing = wordsArray.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else {
//         return 1;
//     }
// });
// console.log(wordsArraySortFlowing);

// -- отфильтровать слова длиной менее 4х символов

// let filterWords = wordsArray.filter(function (str) {
//     if (str.length <= 4) {
//         return str;
//     }
// });
// console.log(filterWords);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let sortArrayMap = wordsArray.map(function (str) {
//     return str += '!';
// });
// console.log(sortArrayMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

// let users = [
//             {name: 'vasya', age: 31, status: false},
//             {name: 'petya', age: 30, status: true},
//             {name: 'kolya', age: 29, status: true},
//             {name: 'olya', age: 28, status: false},
//             {name: 'max', age: 30, status: true},
//             {name: 'anya', age: 31, status: false},
//             {name: 'oleg', age: 28, status: false},
//             {name: 'andrey', age: 29, status: true},
//             {name: 'masha', age: 30, status: true},
//             {name: 'olya', age: 31, status: false},
//             {name: 'max', age: 31, status: true}];

// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let sortAgeUsersGrowth = users.sort((a, b) => a.age - b.age);
// console.log(sortAgeUsersGrowth);

// let sortAgeUsersDecrease = users.sort((a, b) => b.age - a.age);
// console.log(sortAgeUsersDecrease);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortNameUsersGrowth = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sortNameUsersGrowth);

// let sortNameUsersDecrease = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sortNameUsersDecrease);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let usersNew = JSON.stringify(users);
// let usersNewParse = JSON.parse(usersNew);
//
// let addIdUsers = usersNewParse.map((value, index) => {value.id = index; return value})
// console.log(addIdUsers);
// console.log(users);

// - відсортувати його за індентифікатором

// let sortIdUsers = addIdUsers.sort((a, b) => a.id - b.id);
// console.log(sortIdUsers);

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculate(a, b, callback) {
//     callback(a, b);
// }
// calculate(10, 10, function (a, b) {
//     console.log(a + b);
// });


// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calculate(a, b, c, callback) {
//     callback(a, b, c);
// }
// calculate(10, 10, 2, function (a, b, c) {
//     console.log(a + b*c);
// });

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 4,power: 180},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//     ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

// let filterArrayVolume = cars.filter(function (element) {
//     if (element.volume > 3) {
//         return element;
//     }
// });
// console.log(filterArrayVolume);

// - двигун = 2л

// let filterArrayVolume = cars.filter(function (element) {
//     if (element.volume === 2) {
//         return element;
//     }
// });
// console.log(filterArrayVolume);

// - виробник мерс

// let filterArrayProducer = cars.filter(function (element) {
//     if (element.producer === "mercedes") {
//         return element;
//     }
// });
// console.log(filterArrayProducer);

// - двигун більше 3х літрів + виробник мерседес

// let filterArrayVolumeAndProducer = cars.filter(function (element) {
//     if (element.volume > 3 && element.producer === "mercedes") {
//         return element;
//     }
// });
// console.log(filterArrayVolumeAndProducer);

// - двигун більше 3х літрів + виробник субару

// let filterArrayVolumeAndProducer = cars.filter(function (element) {
//     if (element.volume >= 3 && element.producer === "subaru") {
//         return element;
//     }
// });
// console.log(filterArrayVolumeAndProducer);

// - сили більше ніж 300

// let filterArrayPower = cars.filter(function (element) {
//     if (element.power > 300) {
//         return element;
//     }
// });
// console.log(filterArrayPower);

// - сили більше ніж 300 + виробник субару

// let filterArrayPowerAndProducer = cars.filter(function (element) {
//     if (element.power > 300 && element.producer === "subaru") {
//         return element;
//     }
// });
// console.log(filterArrayPowerAndProducer);

// - мотор серіі ej

// let filterArrayEngine = cars.filter((element) => {
//     if ( element.engine.startsWith('ej')) {
//         return true
//     }});
// console.log(filterArrayEngine);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filterArrayEngineAndProducer = cars.filter((element) => {
//     if ( element.engine.startsWith('ej') && element.power > 300 && element.producer === "subaru") {
//         return true
//     }});
// console.log(filterArrayEngineAndProducer);

// - двигун меньше 3х літрів + виробник мерседес

// let filterArrayVolumeAndProducer = cars.filter(function (element) {
//     if (element.volume < 3 && element.producer === "mercedes") {
//         return element;
//     }
// });
// console.log(filterArrayVolumeAndProducer);

// - двигун більше 2л + сили більше 250

// let filterArrayVolumeAndPower = cars.filter(function (element) {
//     if (element.volume > 2 && element.power > 250) {
//         return element;
//     }
// });
// console.log(filterArrayVolumeAndPower);

// - сили більше 250  + виробник бмв

// let filterArrayPowerAndProducer = cars.filter(function (element) {
//     if (element.power > 250 && element.producer === "bmw") {
//         return element;
//     }
// });
// console.log(filterArrayPowerAndProducer);

//
//

// - взять слдующий массив

// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Kyiv', street: 'Sechenova', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Kyiv', street: 'Maksymovycha', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Pravdy', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//     ];

// -- отсортировать его по id пользователей

// let sortIdUsers = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortIdUsers);

// -- отсортировать его по id пользователей в обратном опрядке

// let sortIdUsers = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sortIdUsers);

// -- отсортировать его по возрасту пользователей

// let sortAgeUsers = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortAgeUsers);

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sortAgeUsers = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sortAgeUsers);

// -- отсортировать его по имени пользователей

// let sortNameUsers = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortNameUsers);

// -- отсортировать его по имени пользователей в обратном порядке

// let sortNameUsers = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortNameUsers);

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sortStreetUsers = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortStreetUsers);

// -- отсортировать его по номеру дома по возрастанию

// let sortNumberUsers = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sortNumberUsers);

// -- отфильтровать (оставить) тех кто младше 30

// let filterAgeUsers = usersWithAddress.filter((element) => element.age < 30);
// console.log(filterAgeUsers);

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filterStatusUsers = usersWithAddress.filter((element) => element.status === false);
// console.log(filterStatusUsers);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filterStatusAndAgeUsers = usersWithAddress.filter((element) => element.status === false && element.age < 30);
// console.log(filterStatusAndAgeUsers);

// -- отфильтровать (оставить) тех у кого номер дома четный

// let filterNumberEvenUsers = usersWithAddress.filter((element) => element.address.number % 2 === 0);
// console.log(filterNumberEvenUsers);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.

// class Car {
//     constructor(brand, power, price, years, owner, name, age, drivingExperience) {
//         this.brand = brand;
//         this.power = power;
//         this.price = price;
//         this.years = years;
//         this.owner = {name, age, drivingExperience};
//     }
//     repairOfMotor() {
//         this.power += this.power * .1;
//     }
//
//     newOwner(name, age, drivingExperience) {
//         this.owner = {name, age, drivingExperience};
//     }
// }
//
// let renault = new Car('Renault Clio', 200, 7000, 2009, 'owner', 'Roman', 30, 5);
// let kia = new Car('Kia Ceed', 250, 10000, 2013, 'owner', 'Kolya', 19, 1);
// let ford = new Car('Ford Fiesta', 220, 6000, 2007, 'owner', 'Anna', 23, 3);
// let fiat = new Car('Fiat Tipo', 300, 18000, 2019, 'owner', 'Anton', 27, 8);
// let audi = new Car('Audi A3', 360, 15000, 2015, 'owner', 'Sasha', 34, 10);
// let honda = new Car('Honda Accord', 280, 12000, 2015, 'owner', 'Irina', 31, 5);
// let mercedes = new Car('Mercedes E200', 320, 9000, 1998, 'owner', 'Dima', 49, 21);
//
// renault.repairOfMotor();
// kia.repairOfMotor();
// ford.repairOfMotor();
// audi.repairOfMotor();
//
// renault.newOwner('Oleg', 42, 20);
// kia.newOwner('Sergey', 27, 3);
// ford.newOwner('Vika', 20, 2);
// audi.newOwner('Andriy', 33, 7);
//
// let cars = [renault, kia, ford, fiat, audi, honda, mercedes];
// console.log(cars);

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// function increaseEnginePower() {
//     for (let i = 0; i < cars.length; i+=2) {
//         cars[i].power += cars[i].power * .1;
//         cars[i].price += cars[i].price * .05;
//     }
// }
// increaseEnginePower();
// console.log(cars);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// function validationOfExperience() {
//     for (let i = 0; i < cars.length; i++) {
//         if (cars[i].owner.drivingExperience < 5 && cars[i].owner.age > 25) {
//             cars[i].owner.drivingExperience += 1;
//         }
//     }
// }
// validationOfExperience();
// console.log(cars);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// function costOfCars() {
//     let moneyNeeded = 0;
//     for (let i = 0; i < cars.length; i++) {
//         moneyNeeded += cars[i].price;
//     }
//     console.log(`To buy all these machines I need ${moneyNeeded} ye!!!`);
// }
// costOfCars();

//
//

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arrayNumbers = [1, 1, 3, 4, 4, 4, 6, 7, 7, 8, 8, 8, 8, 10];
//
// function maxAndMinIndex(key) {
//     let element = arrayNumbers.find(element => element === key);
//     if (element) {
//         console.log("MinIndex =", arrayNumbers.indexOf(key));
//         console.log("MaxIndex =", arrayNumbers.lastIndexOf(key));
//     } else {
//         console.log(arrayNumbers.indexOf(key));
//     }
// }
// maxAndMinIndex(4);

