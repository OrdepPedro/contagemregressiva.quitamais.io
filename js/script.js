// JavaScript source code
const countDownDate = new Date("2024-02-01T00:00:00").getTime();
let lastDayDisplayed = -1;
let message = "";

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
        clearInterval(countdown);
        days = "00";
        hours = "00";
        minutes = "00";
        seconds = "00";
        message = "Chegou o grande dia!";
        
    } else {
        if (lastDayDisplayed !== days) {
            lastDayDisplayed = days;
            if (days === 30) {
                message = "Falta um mês!";
            } else if (days === 7) {
                message = "Falta uma semana!";
            } else if (days >= 1) {
                message = `Faltam ${1+days} dias!`;
            } else if (days < 1) {
                message = "É amanhã";
            }
        }
    }

    document.getElementById("message").innerText = message;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);





