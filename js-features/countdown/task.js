const timer = document.getElementById("timer");

let timerId = setInterval(
    () => {
        timer.textContent -= 1;
        

        if (timer == 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(timerId);
        }
    }, 1000);