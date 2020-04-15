// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
// исчезал элемент с id="text".

// let button_clear = document.getElementById('button_clear');
// let id_text = document.getElementById('text');
// button_clear.onclick = () => {
//     id_text.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button_clear = document.getElementById('button_clear');
// button_clear.onclick = () => {
//     button_clear.style.display = 'none';
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let report = document.getElementById('report');
// let defaultAge = document.getElementById('humanAge').value = 'Enter your age'
// function sendAge () {
//     if (document.getElementById('humanAge').value < 18) {
//         let pElem = document.createElement('p');
//         pElem.textContent = 'Your age is under 18!!!';
//         report.appendChild(pElem);
//     }
// }
// sendAge();

// - Создайте меню, которое раскрывается/сворачивается при клике

// let buttonMenu = document.getElementById('buttonMenu');
// let spisok = document.getElementById('spisok');
//
// buttonMenu.onclick = () => {
//     if (spisok.style.display === 'none') {
//         spisok.style.display = 'block';
//     } else {
//         spisok.style.display = 'none';
//     }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     comment1 = {
//         title: "Oleg",
//         body: "I like this product"},
//     comment2 = {
//         title: "Dima",
//         body: "I recently bought such a cool product"},
//     comment3 = {
//         title: "Anna",
//         body: "It is very expensive"},
//     comment4 = {
//         title: "Kolya",
//         body: "I'll order it for my girlfriend"},
//     comment5 = {
//         title: "Taras",
//         body: "There are no disadvantages, good product"}
// ];
//
// function addComments (array) {
//     let comments = document.getElementById('comments');
//     for (let i = 0; i < array.length; i++) {
//         let divTitleBody = document.createElement("div");
//         let divTitle = document.createElement("div");
//         let divBody = document.createElement("div");
//         let buttonClearBody = document.createElement("button");
//         // buttonClearBody.id = `button${i}`;
//         divTitle.innerHTML = `Name: ${array[i].title}`;
//         divBody.innerHTML = `Comment: ${array[i].body}`;
//         buttonClearBody.innerHTML = 'Clear body';
//         divTitleBody.appendChild(divTitle);
//         divTitleBody.appendChild(divBody);
//         divTitleBody.appendChild(buttonClearBody);
//         comments.appendChild(divTitleBody);
//
//         buttonClearBody.onclick = () => {
//             divTitleBody.style.display = 'none'
//         }
//     }
// }
// addComments(comments);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let buttonForForm = document.getElementById('buttonForForm');
// buttonForForm.onclick = () => {
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input1.value);
//     console.log(document.forms.form2.input2.value);
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// let divTable = document.getElementById('table');
//
// function generateTable (arg1, arg2, arg3) {
//     let table = document.createElement("table");
//     for (let i = 0; i < arg1; i++) {
//     let tr = document.createElement("tr");
//     table.appendChild(tr);
//         for (let j = 0; j < arg2; j++) {
//             let td = document.createElement("td");
//             tr.appendChild(td);
//         }
//     }
//     arg3.appendChild(table);
// }
// generateTable(10, 5, divTable);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let divTable = document.getElementById('table');
// let buttonForm = document.getElementById('buttonForm');
//
// buttonForm.onclick = () => {
//     let input1 = document.forms.form.input1.value;
//     let input2 = document.forms.form.input2.value;
//     let input3 = document.forms.form.input3.value;
//
//     function generateTable (arg1, arg2, arg3) {
//         let table = document.createElement("table");
//
//         for (let i = 0; i < arg1; i++) {
//             let tr = document.createElement("tr");
//             table.appendChild(tr);
//             for (let j = 0; j < arg2; j++) {
//                 let td = document.createElement("td");
//                 td.innerHTML = arg3;
//                 tr.appendChild(td);
//             }
//         }
//         divTable.appendChild(table);
//     }
//     generateTable(input1, input2, input3);
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let buttonRight = document.getElementById('buttonRight');
// let buttonLeft = document.getElementById('buttonLeft');
//
// let images = document.getElementsByTagName('img');
// let index = 0;
// buttonLeft.style.display = 'none';
//
// buttonRight.onclick = () => {
//     buttonRight.style.display = 'block';
//     images[index].style.display = 'none';
//     images[++index].style.display = 'block';
//     if (index === 2) {
//         buttonRight.style.display = 'none';
//     }
//     buttonLeft.style.display = 'block';
// }
//
// buttonLeft.onclick = () => {
//     buttonLeft.style.display = 'block';
//     images[index].style.display = 'none';
//     images[--index].style.display = 'block';
//     if (index === 0) {
//         buttonLeft.style.display = 'none';
//     }
//     buttonRight.style.display = 'block';
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let swearWords = ['fuck you', 'asshole', 'shit', 'bitch', 'schmuck'];
// let buttonWords = document.getElementById('buttonWords');
//
// buttonWords.onclick = () => {
//     for (let i = 0; i < swearWords.length; i++) {
//         if (swearWords[i] === document.forms.formWords.inputWords.value) {
//             alert('There are obscene words in your text !!!');
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let swearWords = ['fuck', 'asshole', 'shit', 'bitch', 'schmuck'];
// let buttonWords = document.getElementById('buttonWords');
//
// buttonWords.onclick = () => {
//     let splitWords = document.forms.formWords.inputWords.value.split(' ');
//
//     for (let i = 0; i < swearWords.length; i++) {
//         for (let j = 0; j < splitWords.length; j++) {
//             if (swearWords[i] === splitWords[j]) {
//                 alert('There are obscene words in your text !!!');
//             }
//         }
//     }
// }

// - создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let idWrap = document.getElementById('wrap');
// let idContent = document.getElementById('content');
// let tagH2 = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
//
// for (let i = 0; i < tagH2.length; i++) {
//     let mark = i;
//     let a = document.createElement('a');
//     let li = document.createElement('li');
//     a.href = '#' + mark;
//     tagH2[i].setAttribute('id', mark);
//     a.innerHTML = tagH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// idContent.appendChild(ul);

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let cbox1 = document.getElementById('cbox1');
// let cbox2 = document.getElementById('cbox2');
// let cbox3 = document.getElementById('cbox3');
// let divFilter = document.getElementById('filter');
//
// cbox1.onclick = () => {
//     for (let i = 0; i < usersWithAddress.length; i++) {
//         if (usersWithAddress[i].status === false) {
//             let p = document.createElement('p');
//             let userInfo = JSON.stringify(usersWithAddress[i]);
//             p.innerHTML = `User: ${userInfo}`;
//             divFilter.appendChild(p);
//         }
//     }
// }
//
// cbox2.onclick = () => {
//     for (let i = 0; i < usersWithAddress.length; i++) {
//         if (usersWithAddress[i].status === false && usersWithAddress[i].age > 29) {
//             let p = document.createElement('p');
//             let userInfo = JSON.stringify(usersWithAddress[i]);
//             p.innerHTML = `User: ${userInfo}`;
//             divFilter.appendChild(p);
//         }
//     }
// }
//
// cbox3.onclick = () => {
//     for (let i = 0; i < usersWithAddress.length; i++) {
//         if (usersWithAddress[i].status === false && usersWithAddress[i].age > 29 && usersWithAddress[i].address.city === 'Kyiv') {
//             let p = document.createElement('p');
//             let userInfo = JSON.stringify(usersWithAddress[i]);
//             p.innerHTML = `User: ${userInfo}`;
//             divFilter.appendChild(p);
//         }
//     }
// }


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан