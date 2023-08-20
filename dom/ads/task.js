document.addEventListener("DOMContentLoaded", () => {
    let mode = 0;
    let interval = 1000;
    const elements = document.querySelectorAll(".rotator .rotator__case");

    setInterval(() => {
        const activeElement = document.querySelector(".rotator .rotator__case_active");  

        let nextElement = null;
        if (mode == 0) {
            nextElement = activeElement.nextElementSibling;
            if (!nextElement) {
                mode = 1;
                nextElement = activeElement.previousElementSibling;
            }
        } else {
            nextElement = activeElement.previousElementSibling;
            if (!nextElement) {
                mode = 0;
                nextElement = activeElement.nextElementSibling;
            }
        }
                   
        activeElement.classList.remove("rotator__case_active");
        nextElement.classList.add("rotator__case_active");
        nextElement.style = `color : ${nextElement.dataset.color}`;
        interval = activeElement.dataset.speed;
    }, interval);    
});
