

const clicker = document.getElementById("cookie");

clicker.addEventListener("click", function(event){
    const counter = document.getElementById("clicker__counter"); 
    counter.textContent++;
});