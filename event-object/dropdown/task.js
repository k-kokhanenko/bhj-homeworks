document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".dropdown__value");
    const parent = element.closest(".dropdown");
    const button = parent.querySelector(".dropdown__list");

    element.addEventListener( "click" , () => {  
        button.classList.toggle("dropdown__list_active");
    });
    
    parent.querySelectorAll(".dropdown__link").forEach(function(item) {
        item.addEventListener( "click" , (event) => {
            event.preventDefault();
            button.classList.toggle("dropdown__list_active");
            element.textContent = event.target.textContent;
        });        
    });
});

