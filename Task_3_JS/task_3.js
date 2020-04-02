// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let windows = {
//     material: "plastic",
//     width: 300,
//     height: 180
// };
//
// let notebook = {
//     diagonal: 17,
//     SSD: "300GB",
//     color: "grey"
// };
//
// let car = {
//     mark: "Renault",
//     model: "Clio",
//     body: "sedan"
// };
//
// let lamp = {
//     cap: "24E",
//     power: 60,
//     lighting: "warm"
// };
//
// let user = {
//     name: "Roman",
//     age: 30,
//     wife: true
// };

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let man = {
//     name: "Oleg",
//     skills: ["js", "C++"],
//     wifi: {name: "Mariya"}
// };
//
// let woman = {
//     name: "Irina",
//     skills: ["cooking", "cleaning"],
//     husband: {name: "Roman", age: 30}
// };
//
// let truck = {
//     model: "KAMAZ",
//     carrying: [20, 40],
//     characteristics: {length: 450, weight: 15}
// };
//
// let pan = {
//     brand: "Tefal",
//     destination: ["electric", "gas"],
//     characteristics: {diameter: 24, material: "steel"}
// };
//
// let smartphone = {
//     brand: "Samsung",
//     equipment: ["smartphone", "charger", "instruction"],
//     screen: {diagonal: 6.2, material: "Gorillas"}
// };

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let key in windows) {
//     console.log(key);
// };
//
// for (let key in notebook) {
//     console.log(key);
// };
//
// for (let key in car) {
//     console.log(key);
// };
//
// for (let key in lamp) {
//     console.log(key);
// };
//
// for (let key in user) {
//     console.log(key);
// };
//
// for (let key in man) {
//     console.log(key);
// };
//
// for (let key in woman) {
//     console.log(key);
// };
//
// for (let key in truck) {
//     console.log(key);
// };
//
// for (let key in pan) {
//     console.log(key);
// };
//
// for (let key in smartphone) {
//     console.log(key);
// };

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(windows));
//
// console.log(Object.keys(notebook));
//
// console.log(Object.keys(car));
//
// console.log(Object.keys(lamp));
//
// console.log(Object.keys(user));
//
// console.log(Object.keys(man));
//
// console.log(Object.keys(woman));
//
// console.log(Object.keys(truck));
//
// console.log(Object.keys(pan));
//
// console.log(Object.keys(smartphone));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)

// let cars = [
//     Renault = {
//         model: "Clio",
//         year: 2009,
//         motor: "petrol",
//         color: "red"
//     },
//     Honda = {
//         model: "Accord",
//         year: 2017,
//         motor: "diesel",
//         color: "white"
//     },
//     Chevrolet = {
//         model: "Volt",
//         year: 2020,
//         motor: "electric",
//         color: "green"
//     },
//     Fiat = {
//         model: "Tipo",
//         year: 2018,
//         motor: "diesel",
//         color: "blue"
//     },
//     Ford = {
//         model: "Focus",
//         year: 2010,
//         motor: "petrol",
//         color: "black"
//     },
//     KIA = {
//         model: "Ceed",
//         year: 2012,
//         motor: "petrol",
//         color: "pink"
//     },
//     Hyundai = {
//         model: "i30",
//         year: 2015,
//         motor: "electric",
//         color: "grey"
//     },
//     BMW = {
//         model: "X7",
//         year: 2020,
//         motor: "diesel",
//         color: "lime"
//     },
//     Audi = {
//         model: "Q3",
//         year: 2018,
//         motor: "petrol",
//         color: "yellow"
//     },
//     Opel = {
//         model: "Corsa",
//         year: 2008,
//         motor: "diesel",
//         color: "purple"
//     }
// ];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)

// let cities = [
//     city_1 = {
//         name: "Kyiv",
//         population: 5000000,
//         country: "Ukraine",
//         coronavirus: true
//     },
//     city_2 = {
//         name: "London",
//         population: 9000000,
//         country: "UK",
//         coronavirus: true
//     },
//     city_3 = {
//         name: "NewYork",
//         population: 12000000,
//         country: "USA",
//         coronavirus: true
//     },
//     city_4 = {
//         name: "Dushanbe",
//         population: 2000000,
//         country: "Tajikistan",
//         coronavirus: false
//     },
//     city_5 = {
//         name: "Minsk",
//         population: 4000000,
//         country: "Belarus",
//         coronavirus: true
//     },
//     city_6 = {
//         name: "Rome",
//         population: 7000000,
//         country: "Italy",
//         coronavirus: true
//     },
//     city_7 = {
//         name: "Madrid",
//         population: 8000000,
//         country: "Spain",
//         coronavirus: true
//     },
//     city_8 = {
//         name: "Warsaw",
//         population: 6000000,
//         country: "Poland",
//         coronavirus: true
//     },
//     city_9 = {
//         name: "Milan",
//         population: 9000000,
//         country: "Italy",
//         coronavirus: true
//     },
//     city_10 = {
//         name: "Washington",
//         population: 10000000,
//         country: "USA",
//         coronavirus: true
//     }
// ];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let carsNew = [
//     Skoda = {
//         model: "Octavia",
//         year: 2018,
//         motor: "diesel",
//         color: "white",
//         driver: {
//             name: "Oleg",
//             age: 28,
//             gender: "man",
//             experience: 8
//         }
//     },
//     Nissan = {
//         model: "Rogue",
//         year: 2015,
//         motor: "petrol",
//         color: "black",
//         driver: {
//             name: "Pavlo",
//             age: 34,
//             gender: "man",
//             experience: 12
//         }
//     },
//     Mitsubishi = {
//         model: "Pajero",
//         year: 2008,
//         motor: "diesel",
//         color: "grey",
//         driver: {
//             name: "Roman",
//             age: 20,
//             gender: "man",
//             experience: 7
//         }
//     },
//     Peugeot = {
//         model: 407,
//         year: 2011,
//         motor: "diesel",
//         color: "white",
//         driver: {
//             name: "Kolya",
//             age: 18,
//             gender: "man",
//             experience: 2
//         }
//     },
//     Toyota = {
//         model: "Camry",
//         year: 2019,
//         motor: "petrol",
//         color: "pink",
//         driver: {
//             name: "Irina",
//             age: 28,
//             gender: "woman",
//             experience: 3
//         }
//     },
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }
//
// let n = 0;
// while (n < cities.length) {
//     console.log(cities[n]);
//     n++;
// }
//
// let j = 0;
// while (j < carsNew.length) {
//     console.log(carsNew[j]);
//     j++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }
//
// for (n = 0; n < cities.length; n++) {
//     console.log(cities[n])
// }
//
// for (j = 0; j < carsNew.length; j++) {
//     console.log(carsNew[j])
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (key of cars) {
//     console.log(key)
// }
//
// for (key of cities) {
//     console.log(key)
// }
//
// for (key of carsNew) {
//     console.log(key)
// }

// - взять объекты из задания 1 и превратить каждый в json.

// let jsonWindiws = JSON.stringify(windows);
// console.log(jsonWindiws);
//
// let jsonNotebook = JSON.stringify(notebook);
// console.log(jsonNotebook);
//
// let jsonCar = JSON.stringify(car);
// console.log(jsonCar);
//
// let jsonLamp = JSON.stringify(lamp);
// console.log(jsonLamp);
//
// let jsonUser = JSON.stringify(user);
// console.log(jsonUser);

// - взять json из задания 11 и превратить их обратно в объекты.

// let WindiwsNew = JSON.parse(jsonWindiws);
// console.log(WindiwsNew);
//
// let NotebookNew = JSON.parse(jsonNotebook);
// console.log(NotebookNew);
//
// let CarNew = JSON.parse(jsonCar);
// console.log(CarNew);
//
// let LampNew = JSON.parse(jsonLamp);
// console.log(LampNew);
//
// let UserNew = JSON.parse(jsonUser);
// console.log(UserNew);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (key of cars) {
//     let jsonCars = JSON.stringify(key)
//     console.log(jsonCars)
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (key of cities) {
//     let jsonCities = JSON.stringify(key)
//     console.log(jsonCities)
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// arr = [];
// for (key of carsNew) {
//     let jsonCarsNew = JSON.stringify(key);
//     arr.push(jsonCarsNew);
// }
// console.log(arr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     Roman = {
//         age: 30,
//         gender: "man",
//         skills: ["js", "java"]
//     },
//     Pavel = {
//         age: 24,
//         gender: "man",
//         skills: ["C++", "js"]
//     },
//     Oleg = {
//         age: 20,
//         gender: "man",
//         skills: ["java", "paskal"]
//     },
//     Vika = {
//         age: 18,
//         gender: "woman",
//         skills: ["C#", "java"]
//     },
//     Irina = {
//         age: 30,
//         gender: "woman",
//         skills: ["js", "swift"]
//     }
// ]

// for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills);
//     };
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

// let skillsUsers = [];
// for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < users[i].skills.length; j++) {
//         skillsUsers.push(users[i].skills)
//     };
// }
// console.log(skillsUsers);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
//     ];
//
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);
//     };
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// let addressUsers = [];
// for (let i = 0; i < users.length; i++) {
//     addressUsers.push(users[i].address);
// }
// console.log(addressUsers);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {
//     let block = document.createElement("div");
//     block.innerHTML = `Name: ${users[i].name}, Age: ${users[i].age}, Status: ${users[i].status},
//     City: ${users[i].address.city}, Country: ${users[i].address.country}, Street: ${users[i].address.street},
//     House number: ${users[i].address.houseNumber}`;
//     document.body.appendChild(block);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// let block = document.createElement("div");
//
// for (let i = 0; i < users.length; i++) {
//
//     let divka = document.createElement("div");
//     let name = document.createElement("div");
//     let age = document.createElement("div");
//     let status = document.createElement("div");
//     let address = document.createElement("div");
//
//     name.innerHTML = users[i].name;
//     age.innerHTML = users[i].age;
//     status.innerHTML = users[i].status;
//     address.innerHTML = users[i].address.country;
//
//     divka.appendChild(name);
//     divka.appendChild(age);
//     divka.appendChild(status);
//     divka.appendChild(address);
//     block.appendChild(divka);
// }
//
// document.body.appendChild(block);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let block = document.createElement("div");
//
// for (let i = 0; i < users.length; i++) {
//
//     let divka = document.createElement("div");
//     let name = document.createElement("div");
//     let age = document.createElement("div");
//     let status = document.createElement("div");
//     let address = document.createElement("div");
//     let city = document.createElement("div");
//     let country = document.createElement("div");
//     let street = document.createElement("div");
//     let houseNumber = document.createElement("div");
//
//     name.innerHTML = users[i].name;
//     age.innerHTML = users[i].age;
//     status.innerHTML = users[i].status;
//     city.innerHTML = users[i].address.city;
//     country.innerHTML = users[i].address.country;
//     street.innerHTML = users[i].address.street;
//     houseNumber.innerHTML = users[i].address.houseNumber;
//
//     divka.appendChild(name);
//     divka.appendChild(age);
//     divka.appendChild(status);
//     divka.appendChild(address);
//     address.appendChild(city);
//     address.appendChild(country);
//     address.appendChild(street);
//     address.appendChild(houseNumber);
//     block.appendChild(divka);
// }
//
// document.body.appendChild(block);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
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
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

// let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id === citiesWithId[j].user_id) {
//             usersWithId[i].adress = citiesWithId[j];
//             usersWithCities.push(usersWithId[i]);
//         };
//     };
// }
// console.log(usersWithCities);

// Частковий приклад реультату:
// let usersWithCities = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let aydishka = document.createElement("id");
// let divka = document.createElement("div");
//
// aydishka.appendChild(divka);
// divka.innerText = "Hello OWU";
// document.body.appendChild(aydishka);
//
// let textId = aydishka.innerText;
// console.log(textId);
//
// let textDiv = divka.innerText;
// console.log(textDiv);

// - змінити цей текст використовуючи селектори id, class,  tag

// let aydishka = document.createElement("id");
// let divka = document.createElement("div");
//
// aydishka.appendChild(divka);
// divka.innerText = "Hello OWU";
// document.body.appendChild(aydishka);
//
// aydishka.innerText = "Hello world";

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let aydishka = document.createElement("id");
// let divka = document.createElement("div");
//
// aydishka.appendChild(divka);
// divka.innerText = "Hello OWU";
// document.body.appendChild(aydishka);
//
// divka.style.backgroundColor = "yellow";
// divka.style.height = "100px";
// divka.style.width = "100px";

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement("table");
// let tr = document.createElement("tr");
// let td_1 = document.createElement("td");
// let td_2 = document.createElement("td");
// let td_3 = document.createElement("td");
//
// table.appendChild(tr);
// tr.appendChild(td_1);
// tr.appendChild(td_2);
// tr.appendChild(td_3);
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     let td_1 = document.createElement("td");
//     let td_2 = document.createElement("td");
//     let td_3 = document.createElement("td");
//
//     table.appendChild(tr);
//     tr.appendChild(td_1);
//     tr.appendChild(td_2);
//     tr.appendChild(td_3);
// }
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.createElement("table");
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     };
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt

// let table = document.createElement("table");
// let n = prompt("Введито количество столбцов:");
// let m = prompt("Введито количество ячеек:");
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//     };
//     table.appendChild(tr);
// }
//
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id

// let tagAll = document.getElementsByTagName("*");
// for (let tag of tagAll) {
//     if (tag.getAttribute('id')) {
//         console.log(tag);
//     };
// }

// - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let tagP = document.getElementsByTagName("p");
// for (let p of tagP) {
//         p.innerText = "hello oktenweb";
// }

// - знайти всі div та змінити ім колір на червоний

// let tagDiv = document.getElementsByTagName("div");
// for (let div of tagDiv) {
//     div.style.backgroundColor = "red";
// }

// ============
// ====class===
// ============
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let tagH2 = document.getElementsByTagName("h2");
// let content = document.getElementById("content");
// let ul = document.createElement("ul");
//
// for (let h2 of tagH2) {
//         let li = document.createElement("li");
//         li.innerText = h2.innerText;
//         ul.appendChild(li);
// }
// content.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules

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
// let wrap = document.createElement("div");
//
// for (let i = 0; i < rules.length; i++) {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement("p");
//
//     div.className = `rules rules${i}`;
//     h2.innerText = rules[i].title;
//     p.innerText = rules[i].body;
//
//     div.appendChild(h2);
//     div.appendChild(p);
//
//     wrap.appendChild(div);
// }
//
// document.body.appendChild(wrap);

// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
