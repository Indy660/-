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

changeColors(clock, "color", 0, 20);     //смена цвета надписи

button.onclick = function() {
    initialHue=0          //почему без объявления переменной?
    id=setInterval('body.style.background=`hsl(${++initialHue%360},100%,50%)`',50);
    //можно ли использовать как-нибудь функцию changeColors?
}               //смена фона

buttonStop.onclick = function() {
    clearInterval(id);
    body.style.background="white"
};              //возврат фона, работает только при одном нажатии режима вечеринки

/* функция проверки счетчика, сколько раз нажата клавиша button, не работает
function counterCheck (counter) {
    if (counter%2===0) {clearInterval(id); body.style.background="white"}
}
counterCheck(counter)
let counter=0
counter++
*/
