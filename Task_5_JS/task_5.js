// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// - назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// function tagName(tag, descriptionAction, arrayAttributes, nameAttributes1, descriptionActionAttributes1,
//                  nameAttributes2, descriptionActionAttributes2) {
//     this.tag = tag;
//     this.descriptionAction = descriptionAction;
//     this.arrayAttributes = [{nameAttributes1, descriptionActionAttributes1}, {nameAttributes2,
//         descriptionActionAttributes2}];
// };
// let tagA = new tagName("a", "Тег <a> является одним из важных элементов HTML и предназначен для " +
//     "создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. " +
//     "Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
//     "При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.",
//     "arrayAttributes", "accesskey", "Активация ссылки с помощью " +
//     "комбинации клавиш.", "coords", "Устанавливает координаты активной области.");
// console.log(tagA);
//
// let tagDiv = new tagName("div", "Элемент <div> является блочным элементом и предназначен для " +
//     "выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. " +
//     "Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега " +
//     "добавить атрибут class или id с именем селектора.",
//     "arrayAttributes", "align", "Задает выравнивание содержимого тега <div>.",
//     "title", "Добавляет всплывающую подсказку к содержимому.");
// console.log(tagDiv);
//
// let tagH1 = new tagName("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают " +
//     "относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный " +
//     "заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. " +
//     "По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего " +
//     "уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, " +
//     "а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него " +
//     "добавляется пустое пространство.",
//     "arrayAttributes", "align", "Определяет выравнивание заголовка.",
//     "class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением.");
// console.log(tagH1);
//
// let tagSpan = new tagName("span", "Тег <span> предназначен для определения строчных элементов документа. " +
//     "В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть " +
//     "информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить " +
//     "цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. " +
//     "Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега " +
//     "добавить атрибут class или id с именем селектора.",
//     "arrayAttributes", "accesskey", "Позволяет получить доступ к " +
//     "элементу с помощью заданного сочетания клавиш.", "dir", "Задает направление" +
//     " и отображение текста — слева направо или справа налево.");
// console.log(tagSpan);
//
// let tagInput = new tagName("input", "Тег <input> является одним из разносторонних элементов формы " +
//     "и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным " +
//     "образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. " +
//     "Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если " +
//     "введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, " +
//     "то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, " +
//     "например, скриптов на языке JavaScript.",
//     "arrayAttributes", "accept", "Устанавливает фильтр на типы файлов, " +
//     "которые вы можете отправить через поле загрузки файлов.", "alt", "Альтернативный " +
//     "текст для кнопки с изображением.");
// console.log(tagInput);
//
// let tagForm = new tagName("form", "Тег <form> устанавливает форму на веб-странице. Форма предназначена " +
//     "для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, " +
//     "с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять " +
//     "по своему усмотрению.",
//     "arrayAttributes", "target", "Имя окна или фрейма, куда обработчик " +
//     "будет загружать возвращаемый результат.", "method", "Метод протокола HTTP.");
// console.log(tagForm);
//
// let tagOption = new tagName("option", "Тег <option> определяет отдельные пункты списка, " +
//     "создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, " +
//     "а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется " +
//     "поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",
//     "arrayAttributes", "label", "Указание метки пункта списка.",
//     "disabled", "Заблокировать для доступа элемент списка.");
// console.log(tagOption);
//
// let tagSelect = new tagName("select", "Тег <select> позволяет создать элемент интерфейса в виде " +
//     "раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит " +
//     "от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым " +
//     "широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с " +
//     "помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка " +
//     "на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка " +
//     "идет обращение через скрипты.",
//     "arrayAttributes", "form", "Связывает список с формой.",
//     "size", "Количество отображаемых строк списка.");
// console.log(tagSelect);

// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// class TagName {
//     constructor(tag, descriptionAction, arrayAttributes, nameAttributes1, descriptionActionAttributes1,
//                 nameAttributes2, descriptionActionAttributes2) {
//         this.tag = tag;
//         this.descriptionAction = descriptionAction;
//         this.arrayAttributes = [{nameAttributes1, descriptionActionAttributes1}, {nameAttributes2,
//             descriptionActionAttributes2}];
//     }
// }
//
// let tagA = new TagName("a", "Тег <a> является одним из важных элементов HTML и предназначен для " +
//     "создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. " +
//     "Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. " +
//     "При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.",
//     "arrayAttributes", "accesskey", "Активация ссылки с помощью " +
//     "комбинации клавиш.", "coords", "Устанавливает координаты активной области.");
// console.log(tagA);
//
// let tagDiv = new TagName("div", "Элемент <div> является блочным элементом и предназначен для " +
//     "выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. " +
//     "Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега " +
//     "добавить атрибут class или id с именем селектора.",
//     "arrayAttributes", "align", "Задает выравнивание содержимого тега <div>.",
//     "title", "Добавляет всплывающую подсказку к содержимому.");
// console.log(tagDiv);
//
// let tagH1 = new TagName("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают " +
//     "относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный " +
//     "заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. " +
//     "По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего " +
//     "уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, " +
//     "а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него " +
//     "добавляется пустое пространство.",
//     "arrayAttributes", "align", "Определяет выравнивание заголовка.",
//     "class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением.");
// console.log(tagH1);
//
// let tagSpan = new TagName("span", "Тег <span> предназначен для определения строчных элементов документа. " +
//     "В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть " +
//     "информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить " +
//     "цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. " +
//     "Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега " +
//     "добавить атрибут class или id с именем селектора.",
//     "arrayAttributes", "accesskey", "Позволяет получить доступ к " +
//     "элементу с помощью заданного сочетания клавиш.", "dir", "Задает направление" +
//     " и отображение текста — слева направо или справа налево.");
// console.log(tagSpan);
//
// let tagInput = new TagName("input", "Тег <input> является одним из разносторонних элементов формы " +
//     "и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным " +
//     "образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. " +
//     "Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если " +
//     "введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, " +
//     "то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, " +
//     "например, скриптов на языке JavaScript.",
//     "arrayAttributes", "accept", "Устанавливает фильтр на типы файлов, " +
//     "которые вы можете отправить через поле загрузки файлов.", "alt", "Альтернативный " +
//     "текст для кнопки с изображением.");
// console.log(tagInput);
//
// let tagForm = new TagName("form", "Тег <form> устанавливает форму на веб-странице. Форма предназначена " +
//     "для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, " +
//     "с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять " +
//     "по своему усмотрению.",
//     "arrayAttributes", "target", "Имя окна или фрейма, куда обработчик " +
//     "будет загружать возвращаемый результат.", "method", "Метод протокола HTTP.");
// console.log(tagForm);
//
// let tagOption = new TagName("option", "Тег <option> определяет отдельные пункты списка, " +
//     "создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, " +
//     "а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется " +
//     "поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",
//     "arrayAttributes", "label", "Указание метки пункта списка.",
//     "disabled", "Заблокировать для доступа элемент списка.");
// console.log(tagOption);
//
// let tagSelect = new TagName("select", "Тег <select> позволяет создать элемент интерфейса в виде " +
//     "раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит " +
//     "от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым " +
//     "широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с " +
//     "помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка " +
//     "на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка " +
//     "идет обращение через скрипты.",
//     "arrayAttributes", "form", "Связывает список с формой.",
//     "size", "Количество отображаемых строк списка.");
// console.log(tagSelect);

// ==============================================
//
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: "Clio",
//     producer: "Renault",
//     graduationYear: 2009,
//     maxSpeed: 180,
//     engineCapacity: 200
// }
//
// function drive() {
//     console.log(`Їдемо зі швидкістю ${car.maxSpeed} на годину`);
// }
//
// function info() {
//     console.log(`Модель: ${car.model}, Виробник: ${car.producer}, Рік випуску: ${car.graduationYear},
//     Максимальна швидкість: ${car.maxSpeed}, Об'єм двигуна: ${car.engineCapacity}`);
// }
//
// function increaseMaxSpeed(newSpeed) {
//     car.maxSpeed += newSpeed;
// }
//
// function changeYear(newValue) {
//     car.graduationYear = newValue;
// }
//
// function addDriver(name, age) {
//     car.driver = {name, age}
// }
//
// console.log(car);
// drive();
// info();
// increaseMaxSpeed(40);
// changeYear(2014);
// console.log(car);
// addDriver("ds", "Roma", 30);
// console.log(car);

// ==============================================
//
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, producer, graduationYear, maxSpeed = 70, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(`Модель: ${this.model}, Виробник: ${this.producer}, Рік випуску: ${this.graduationYear},
//         Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engineCapacity}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.graduationYear = newValue;
//     }
//     this.addDriver = function (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// let renault = new Car("Clio", "Renault", 2009, 180, 200);
// console.log(renault);
// renault.drive();
// renault.info()
// renault.increaseMaxSpeed(50);
// renault.drive();
// renault.changeYear(2012);
// renault.info();
// renault.addDriver("Roma", 30);
// console.log(renault);

// ==============================================
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//     constructor (model, producer, graduationYear, maxSpeed = 70, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info () {
//         console.log(`Модель: ${this.model}, Виробник: ${this.producer}, Рік випуску: ${this.graduationYear},
//         Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engineCapacity}`);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.graduationYear = newValue;
//     }
//     addDriver (name, age) {
//         this.addDriver = {name, age};
//     }
// }
//
// let renault = new Car("Clio", "Renault", 2009, 180, 200);
// console.log(renault);
// renault.drive();
// renault.info()
// renault.increaseMaxSpeed(50);
// renault.drive();
// renault.changeYear(2012);
// renault.info();
// renault.addDriver("Roma", 30);
// console.log(renault);

// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor (name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let irina = new Cinderella("Irina", 30, 35);
// let yana = new Cinderella("Yana", 23, 39);
// let olya = new Cinderella("Olya", 27, 40);
// let katya = new Cinderella("Katya", 24, 32);
// let nastya = new Cinderella("Nastya", 28, 38);
// let valya = new Cinderella("Valya", 29, 41);
// let anya = new Cinderella("Anya", 17, 33);
// let olena = new Cinderella("Olena", 33, 34);
// let dasha = new Cinderella("Dasha", 36, 37);
// let tanya = new Cinderella("Tanya", 25, 36);
//
// let tenCinderells = [irina, yana, olya, katya, nastya, valya, anya, olena, dasha, tanya];
// console.log(tenCinderells);
//
// class Prince {
//     constructor(name, age, foundFoot) {
//         this.name = name;
//         this.age = age;
//         this.foundFoot = foundFoot;
//     }
//
//     myCinderella(array) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i].footSize === this.foundFoot) {
//                 console.log(`My Cinderella's name is ${array[i].name}`)
//             }
//         }
//     }
// }
//
// let prince = new Prince("Roma", 30, 35);
// prince.myCinderella(tenCinderells);

// ==============================================
//
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let irina = new Cinderella("Irina", 30, 35);
// let yana = new Cinderella("Yana", 23, 39);
// let olya = new Cinderella("Olya", 27, 40);
// let katya = new Cinderella("Katya", 24, 32);
// let nastya = new Cinderella("Nastya", 28, 38);
// let valya = new Cinderella("Valya", 29, 41);
// let anya = new Cinderella("Anya", 17, 33);
// let olena = new Cinderella("Olena", 33, 34);
// let dasha = new Cinderella("Dasha", 36, 37);
// let tanya = new Cinderella("Tanya", 25, 36);
//
// let tenCinderells = [irina, yana, olya, katya, nastya, valya, anya, olena, dasha, tanya];
// console.log(tenCinderells);
//
// function Prince(name, age, foundFoot) {
//     this.name = name;
//     this.age = age;
//     this.foundFoot = foundFoot;
//
//     this.myCinderella = function(array) {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i].footSize === this.foundFoot) {
//                 console.log(`My Cinderella's name is ${array[i].name}`)
//             }
//         }
//     }
// }
//
// let prince = new Prince("Kolya", 20, 38);
// prince.myCinderella(tenCinderells);