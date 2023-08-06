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
const currentDate = new Date();
timer.textContent = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

let timerId = setInterval(
    () => {
        currentDate.setSeconds(currentDate.getSeconds() - 1);
        timer.textContent = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

        if (currentDate.getTime() == 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(timerId);
        }
    }, 1000);