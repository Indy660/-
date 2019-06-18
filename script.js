function getTime() {
    const fullTime = new Date();
    let hours = fullTime.getHours();
    let minutes = fullTime.getMinutes();
    let seconds = fullTime.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = ` : ${minutes}`;
    document.querySelector("#second").innerHTML = ` : ${seconds}`;
}
setInterval(getTime, 100);


function changeColors(element, colorRule, initialHue, timeout) {
    setInterval(() => element.style[colorRule]=`hsl(${++initialHue%360},100%,50%)`, timeout)
}
const body = document.getElementsByTagName('body')[0];
const button = document.getElementById('epilepsia');
const clock = document.getElementById('clock');
const buttonStop = document.getElementById('epilepsiaStop');

changeColors(clock, "color", 0, 20);     //смена цвета надписи цифр

button.onclick = function() {
    initialHue=0;          //почему без объявления переменной?
    id=setInterval('body.style.background=`hsl(${++initialHue%360},100%,50%)`',50);
    //можно ли использовать как-нибудь функцию changeColors?
};               //смена фона

buttonStop.onclick = function() {
    body.style.background="white"
    BUTTON.disabled = false;
    clearInterval(id);
};              //возврат фона, работает только при одном нажатии режима вечеринки


// Кнопка для изменения фонового изображения.
const BUTTON = document.getElementById('changeTheme');
let themes=[
    'url("https://solovey.su/image/download/id=1641&type=original")',
    'url("http://wallpapers-images.ru/1920x1080/animal/wallpapers/wallpapers-animal-018.jpg")',
    'url("https://s1.1zoom.ru/b5050/582/Cats_Kittens_Glance_545025_2880x1800.jpg")',
    'url("http://murlo.org/ru/wp-content/uploads/2014/12/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B2%D0%B8%D1%81%D0%BB%D0%BE%D1%83%D1%85%D0%BE%D0%B9-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8.jpg")',
    'url("http://www.radionetplus.ru/uploads/posts/2013-06/1370721329_na-rabochiy-stol-2.jpg")',
    'url("https://avatars.mds.yandex.net/get-pdb/245485/85bdc4f7-bfc5-41a9-921f-01b45dbfc0ad/orig")',
    'url("http://st.gde-fon.com/wallpapers_original/341183_ovcharka_-sobaka_-shhenok_-smotrit_1920x1200_www.Gde-Fon.com.jpg")',
    'url("https://mebel-go.ru/mebelgoer/9200nastol.com.ua-61789.jpg")',
    'url("http://www.hqwallpapers.ru/wallpapers/animals/belye-tigry.jpg")',
    'url("https://img1.akspic.ru/image/94234-porody_gruppy_sobak-sobaka-shhenok-ohotnichya_sobaka-shhenyachya_lyubov-1920x1080.jpg?attachment=1")',
    'url("http://gdefon.org/_ph/2014/04/pritaivshiysya-cherno-belyy-kot.jpg")',
    'url("http://img.fonwall.ru/mid/up/kotenok-morda-yazik-lapi.jpg")',
    'url("http://wallpapers-images.ru/1920x1080/animal/wallpapers/wallpapers-animal-6.jpg")',
    'url("https://w-dog.ru/wallpapers/5/17/285340018153883.jpg")',
    'url("http://www.hqwallpapers.ru/wallpapers/animals/myshka-s-buketom.jpg")',
    'url("http://www.gandex.ru/upl/oboi/gandex.ru-19837_30bd8502831492b543db9289b08aa491.jpg")',
    'url("http://planetakartinok.net/photo/0-0/9174_1363118876.jpg")',
    'url("http://lookw.ru/1/487/1402241735-oboi-1920h1080.-planeta-obezyan-21.jpg")'
];
// Рабочий массив изображений. Изначально пуст.
let images = [];

// Подготовка рабочего массива изображений.
function prepareImages() {
    // Оставим только уникальный набор изображений, если есть повторяющиеся значения, то они будут удалены.
    images = [...new Set(themes)];

    // Сортируем единожды в случайном порядке.
    images.sort((a, b) => Math.random() - 0.5);
}

function changeTheme() {
    // Если не осталось больше изображений в массиве,
    // подготовим новый рабочий массив.
    if (!images.length) prepareImages();

    // Удаляем изображения из массива.
    let deleted = images.splice(0, 1);

    // Берем первое изображение из массива удаленных.
      let image = deleted[0];

    // Меняем фоновое изображение.
    document.body.style.backgroundImage =  image;

    // Если не осталось больше изображений в массиве, блокируем кнопку.
    if (!images.length) {BUTTON.disabled = true; alert ("Все обои закончились!")}
}

// Добавляем функцию обработчик на событие `click`.
BUTTON.addEventListener('click', changeTheme);


/* проблема при повторном прогоне всех фоновых изображения,
некоторые из-них меняют пропорции
 */

/* функция проверки счетчика, сколько раз нажата клавиша button, не работает
function counterCheck (counter) {
    if (counter%2===0) {clearInterval(id); body.style.background="white"}
}
counterCheck(counter)
let counter=0
counter++
*/
