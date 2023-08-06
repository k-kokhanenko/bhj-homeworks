const timer = document.getElementById("timer");

/*
let timerId = setInterval(
    () => {
        timer.textContent -= 1;
        

        if (timer.textContent == 0) {            
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
            //window.location = "some address here";
        }
    }, 1000);
*/

// #1
function formatDate(date) {
    function addZero(num) {
        if (Number(num) < 10) {
            return `0${num}`;
        }
        return num;
    }

    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
}

const currentDate = new Date();
timer.textContent = formatDate(currentDate);

let timerId = setInterval(
    () => {
        currentDate.setSeconds(currentDate.getSeconds() - 1);
        timer.textContent = formatDate(currentDate);

        if (currentDate.getTime() == 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(timerId);
        }
    }, 1000);