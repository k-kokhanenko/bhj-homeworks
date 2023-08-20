function setBookClass() {
    const book = document.getElementById("book"); 
    if (book) {
        let className = "book";    

        for (let item of arguments) {
            if (item.dataType == "size") {
                if (item.value == "small" || item.value == "big") {
                    className += ` book_fs-${item.value}`;
                }         
            } else if (item.dataType == "textColor") {
                className += ` book_color-${item.value}`;
            } else if (item.dataType == "bgColor") {
                className += ` book_bg-${item.value}`;
            }
        }
    
        book.className = className;        
    }                              
}

document.addEventListener("DOMContentLoaded", () => {
    const params = [
        { 
            value : "", 
            dataType: "size",  
            selector : ".book__control_font-size", 
            subSelector : ".font-size", 
            active : "font-size_active" 
        },
        { 
            value : "", 
            dataType: "textColor", 
            selector : ".book__control_color", 
            subSelector : ".color", 
            active : "color_active" 
        },
        { 
            value : "", 
            dataType: "bgColor", 
            selector : ".book__control_background", 
            subSelector : ".color", 
            active : "color_active" 
        },
    ];

    // Get current values
    params.forEach((el) => {
        const element =  document.querySelector(`${el.selector} .${el.active}`);
        el.value = element.dataset[el.dataType];
    });    

    params.forEach((el) => {
        const controls = document.querySelectorAll(`${el.selector} ${el.subSelector}`);
        controls.forEach((element) => {
            element.addEventListener("click", (e) => {
                e.preventDefault();
                
                controls.forEach((element) => {
                    element.classList.remove(el.active);                 
                });
                element.classList.toggle(el.active);
    
                el.value = element.dataset[el.dataType];
                setBookClass(...params);
            });    
        });    
    });
});
