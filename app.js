window.onload = function() {
let now = new Date();
let h = now.getHours();
if (h <= 4 || h >= 23)
{
    alert('Доброй ночи!\n' + 'Приветствуем Вас в нашем книжном магазине')
}
if (h > 4 && h <= 12)
{
    alert('Доброе утро!\n' + 'Приветствуем Вас в нашем книжном магазине')
}
if (h > 12 && h < 18)
{
    alert('Добрый день!\n' + 'Приветствуем Вас в нашем книжном магазине')
}
if (h >= 18 && h < 23)
{
    alert('Добрый вечер!\n' + 'Приветствуем Вас в нашем книжном магазине')
}
}