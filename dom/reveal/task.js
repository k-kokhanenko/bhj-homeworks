
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('scroll', function(e) {
        const elements = document.querySelectorAll(".reveal");
        elements.forEach((element) => {
            const {top, bottom} = element.getBoundingClientRect();
            
            if (top < this.window.innerHeight && bottom > 0) {
                element.classList.toggle("reveal_active");
            }    
        });
    });
});


