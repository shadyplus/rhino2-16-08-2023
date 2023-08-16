//Таймер до конца дня
window.onload = function insertTime() {
    let time0 = new Date();
    let timeRemains = {
        hours: 23 - time0.getHours(),
        minutes: 59 - time0.getMinutes(),
        seconds: 60 - time0.getSeconds(),
    }
            if (timeRemains.hours < 10) {
                timeRemains.hours = '0' + timeRemains.hours;
            }
            if (timeRemains.minutes < 10) {
                timeRemains.minutes = '0' + timeRemains.minutes;
            }
            if (timeRemains.seconds < 10) {
                timeRemains.seconds = '0' + timeRemains.seconds;
            }
    document.querySelector('.result-hour').innerHTML = timeRemains.hours;
    document.querySelector('.result-minute').innerHTML = timeRemains.minutes;
    document.querySelector('.result-second').innerHTML = timeRemains.seconds;
    setInterval(insertTime,1000)
}
