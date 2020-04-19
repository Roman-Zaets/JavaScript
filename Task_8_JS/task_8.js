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

let buttonReg = document.getElementById('buttonReg');

buttonReg.onclick = () => {
    let inputLogin = document.getElementById('inputLogin');
    if (inputLogin.value === localStorage.getItem(`Login ${inputLogin.value}`)) {
        alert('Такой логин уже существует. Пожалуйста, придумайте другой!!!');
    } else {
        let valueLogin = inputLogin.value;
        localStorage.setItem(`Login ${valueLogin}`, valueLogin);
        let selectUsers = document.getElementById('selectUsers');
        let newOption = new Option(`${valueLogin}`, `${valueLogin}`);
        selectUsers.append(newOption);

        inputLogin.value = '';

        let inputFio = document.getElementById('inputFio');
        let valueFio = inputFio.value;
        localStorage.setItem(`FIO ${valueLogin}`, valueFio);
        inputFio.value = '';

        let inputNumber = document.getElementById('inputNumber');
        let valueNumber= inputNumber.value;
        localStorage.setItem(`Number ${valueLogin}`, valueNumber);
        inputNumber.value = '';

        let inputEmail = document.getElementById('inputEmail');
        let valueEmail = inputEmail.value;
        localStorage.setItem(`Email ${valueLogin}`, valueEmail);
        inputEmail.value = '';

        let inputFirm = document.getElementById('inputFirm');
        let valueFirm = inputFirm.value;
        localStorage.setItem(`Firm ${valueLogin}`, valueFirm);
        inputFirm.value = '';

        let inputOtdel = document.getElementById('inputOtdel');
        let valueOtdel = inputOtdel.value;
        localStorage.setItem(`Otdel ${valueLogin}`, valueOtdel);
        inputOtdel.value = '';

        let selectDay = document.getElementById('selectDay');
        let valueDay = selectDay.value;
        localStorage.setItem(`Day ${valueLogin}`, valueDay);
        selectDay.value = '';

        let selectMonth = document.getElementById('selectMonth');
        let valueMonth= selectMonth.value;
        localStorage.setItem(`Month ${valueLogin}`, valueMonth);
        selectMonth.value = '';

        let selectYear = document.getElementById('selectYear');
        let valueYear = selectYear.value;
        localStorage.setItem(`Year ${valueLogin}`, valueYear);
        selectYear.value = '';
    }
}

let buttonEdit = document.getElementById('buttonEdit');

buttonEdit.onclick = () => {
    let notebookEdit = document.getElementById('notebookEdit');
    let notebook = document.getElementById('notebook');
    notebookEdit.style.display = 'block';
    notebook.style.display = 'none';

    let selectUsers = document.getElementById('selectUsers');

    let inputLogin = document.getElementById('inputLoginEdit');
    inputLogin.value = localStorage.getItem(`Login ${selectUsers.value}`);

    let inputFio = document.getElementById('inputFioEdit');
    inputFio.value = localStorage.getItem(`FIO ${selectUsers.value}`);

    let inputNumber = document.getElementById('inputNumberEdit');
    inputNumber.value = localStorage.getItem(`Number ${selectUsers.value}`);

    let inputEmail = document.getElementById('inputEmailEdit');
    inputEmail.value = localStorage.getItem(`Email ${selectUsers.value}`);

    let inputFirm = document.getElementById('inputFirmEdit');
    inputFirm.value = localStorage.getItem(`Firm ${selectUsers.value}`);

    let inputOtdel = document.getElementById('inputOtdelEdit');
    inputOtdel.value = localStorage.getItem(`Otdel ${selectUsers.value}`);

    let selectDay = document.getElementById('selectDayEdit');
    selectDay.value = localStorage.getItem(`Day ${selectUsers.value}`);

    let selectMonth = document.getElementById('selectMonthEdit');
    selectMonth.value = localStorage.getItem(`Month ${selectUsers.value}`);

    let selectYear = document.getElementById('selectYearEdit');
    selectYear.value = localStorage.getItem(`Year ${selectUsers.value}`);
}

let buttonDel = document.getElementById('buttonDel');
buttonDel.onclick = () => {
    let selectUsers = document.getElementById('selectUsers');
    localStorage.removeItem(`Login ${selectUsers.value}`);
    localStorage.removeItem(`FIO ${selectUsers.value}`);
    localStorage.removeItem(`Number ${selectUsers.value}`);
    localStorage.removeItem(`Email ${selectUsers.value}`);
    localStorage.removeItem(`Firm ${selectUsers.value}`);
    localStorage.removeItem(`Otdel ${selectUsers.value}`);
    localStorage.removeItem(`Day ${selectUsers.value}`);
    localStorage.removeItem(`Month ${selectUsers.value}`);
    localStorage.removeItem(`Year ${selectUsers.value}`);
    selectUsers.removeChild(selectUsers.options[selectUsers.selectedIndex]);

    let inputLogin = document.getElementById('inputLoginEdit');
    inputLogin.value = '';

    let inputFio = document.getElementById('inputFioEdit');
    inputFio.value = '';

    let inputNumber = document.getElementById('inputNumberEdit');
    inputNumber.value = '';

    let inputEmail = document.getElementById('inputEmailEdit');
    inputEmail.value = '';

    let inputFirm = document.getElementById('inputFirmEdit');
    inputFirm.value = '';

    let inputOtdel = document.getElementById('inputOtdelEdit');
    inputOtdel.value = '';

    let selectDay = document.getElementById('selectDayEdit');
    selectDay.value = '';

    let selectMonth = document.getElementById('selectMonthEdit');
    selectMonth.value = '';

    let selectYear = document.getElementById('selectYearEdit');
    selectYear.value = '';
}

let buttonSave = document.getElementById('buttonSave');

buttonSave.onclick = () => {
    let selectUsers = document.getElementById('selectUsers');

    let inputLoginEdit = document.getElementById('inputLoginEdit');
    let valueLoginEdit = inputLoginEdit.value;
    localStorage.setItem(`Login ${selectUsers.value}`, valueLoginEdit);

    let inputFioEdit = document.getElementById('inputFioEdit');
    let valueFioEdit = inputFioEdit.value;
    localStorage.setItem(`FIO ${selectUsers.value}`, valueFioEdit);

    let inputNumberEdit = document.getElementById('inputNumberEdit');
    let valueNumberEdit = inputNumberEdit.value;
    localStorage.setItem(`Number ${selectUsers.value}`, valueNumberEdit);

    let inputEmailEdit = document.getElementById('inputEmailEdit');
    let valueEmailEdit = inputEmailEdit.value;
    localStorage.setItem(`Email ${selectUsers.value}`, valueEmailEdit);

    let inputFirmEdit = document.getElementById('inputFirmEdit');
    let valueFirmEdit = inputFirmEdit.value;
    localStorage.setItem(`Firm ${selectUsers.value}`, valueFirmEdit);

    let inputOtdelEdit = document.getElementById('inputOtdelEdit');
    let valueOtdelEdit = inputOtdelEdit.value;
    localStorage.setItem(`Otdel ${selectUsers.value}`, valueOtdelEdit);

    let selectDayEdit = document.getElementById('selectDayEdit');
    let valueDayEdit = selectDayEdit.value;
    localStorage.setItem(`Day ${selectUsers.value}`, valueDayEdit);

    let selectMonthEdit = document.getElementById('selectMonthEdit');
    let valueMonthEdit = selectMonthEdit.value;
    localStorage.setItem(`Month ${selectUsers.value}`, valueMonthEdit);

    let selectYearEdit = document.getElementById('selectYearEdit');
    let valueYearEdit = selectYearEdit.value;
    localStorage.setItem(`Year ${selectUsers.value}`, valueYearEdit);
}