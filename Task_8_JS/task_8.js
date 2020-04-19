// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let memorizingText = document.getElementById('inputText');
//
// let memorizingTextInput = localStorage.getItem('inputText');
// if (memorizingTextInput) {
//     memorizingText.value = memorizingTextInput;
// }
//
// memorizingText.oninput = () => {
//     let value = memorizingText.value;
//     localStorage.setItem('inputText', value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// function saveData(saveTag, saveKey) {
//     saveTag.oninput = () => {
//         let value = saveTag.value;
//         localStorage.setItem(saveKey, value);
//     }
// }
// saveData(document.forms.form1.input1, 'input1');
// saveData(document.forms.form1.textarea, 'textarea');
// saveData(document.forms.form1.select1, 'select1');
// saveData(document.forms.form1.select2, 'select2');
//
// function saveChecked(saveTag, saveKey) {
//     saveTag.oninput = () => {
//         let checked = saveTag.checked;
//         localStorage.setItem(saveKey, checked);
//     }
// }
//
// saveChecked(document.forms.form1.cbox1, 'cbox1');
// saveChecked(document.forms.form1.cbox2, 'cbox2');
// saveChecked(document.forms.form1.cbox3, 'cbox3');
// saveChecked(document.forms.form1.radio1, 'radio1');
// saveChecked(document.forms.form1.radio2, 'radio2');
// saveChecked(document.forms.form1.radio3, 'radio3');
//
// function returnData(returnTag, keyReturn) {
//     let returnText = localStorage.getItem(keyReturn);
//     if (returnText) {
//         returnTag.value = returnText;
//     }
// }
//
// returnData(document.forms.form1.input1, 'input1');
// returnData(document.forms.form1.textarea, 'textarea');
// returnData(document.forms.form1.select1, 'select1');
// returnData(document.forms.form1.select2, 'select2');
//
// function returnChecked(returnTag, keyReturn) {
//     let checked = localStorage.getItem(keyReturn);
//     if (checked) {
//         returnTag.checked = checked;
//     }
// }
//
// returnChecked(document.forms.form1.cbox1, 'cbox1');
// returnChecked(document.forms.form1.cbox2, 'cbox2');
// returnChecked(document.forms.form1.cbox3, 'cbox3');
// returnChecked(document.forms.form1.radio1, 'radio1');
// returnChecked(document.forms.form1.radio2, 'radio2');
// returnChecked(document.forms.form1.radio3, 'radio3');

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let save = document.getElementById('save');
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let n = 1;
// let i = 0;
//
// save.onclick = () =>{
//     let saveText = document.getElementById('textareaNew');
//     let inputText = JSON.parse(localStorage.getItem('inputText'));
//     if(Array.isArray(inputText) && localStorage.getItem('inputText') != null){
//         inputText.push(saveText.value);
//         localStorage.setItem('inputText', JSON.stringify(inputText));
//     }
//     else {
//         let arr = [];
//         arr.push(saveText.value);
//         localStorage.setItem('inputText', JSON.stringify(arr));
//     }
// }
//
// left.onclick = () => {
//     let fromButton = JSON.parse(localStorage.getItem('inputText'));
//     if (n !== null&& n < fromButton.length+1) {
//         i = fromButton.length - n;
//         n++;
//         let value = fromButton[i];
//         let saveText = document.getElementById('textareaNew');
//         saveText.value = value;
//     }
// };
//
// right.onclick = () => {
//     let fromButton = JSON.parse(localStorage.getItem('inputText'));
//     if ( fromButton !== null && i < fromButton.length - 1 ) {
//         i++;
//         let value = fromButton[i];
//         let saveText = document.getElementById('textareaNew');
//         saveText.value = value;
//     } else {
//         n = 1;
//     }
// };

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта




