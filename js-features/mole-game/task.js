
let elements = document.querySelectorAll(".hole");

for (let element of elements) {
    element.addEventListener("click", function(){
        function clear(dead, lost) {
            dead.textContent = 0;
            lost.textContent = 0;
        }

        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (this.classList.contains("hole_has-mole")) {
            dead.textContent++; 
            if (dead.textContent >= 10) {
                alert("Победа");
                clear(dead, lost);
            }
        } else {
            lost.textContent++;
            if (lost.textContent >= 5) {
                alert("Вы проиграли");
                clear(dead, lost);
            }
        }
    });
}

