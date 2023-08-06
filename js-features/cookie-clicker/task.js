

const clicker = document.getElementById("cookie");

clicker.addEventListener("click", function(){
    const counter = document.getElementById("clicker__counter"); 
    counter.textContent++;
    (counter.textContent % 2) ? this.width /= 2 : this.width *= 2;   
});