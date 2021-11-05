let login = prompt('Введіть логін');
if (login === 'name') {
    let pass = prompt('Введіть пароль');
    if (pass === 'LOGOS') {
        alert('Ласкаво просимо, шановний!')
    }
    else {
        alert('Пароль невірний!');
    }
}
else if (login === null) {
    alert('Вхід скасований');
}
else {
    alert('Я вас не знаю');
}