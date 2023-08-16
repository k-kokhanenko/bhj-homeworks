const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab__content");

tabs.forEach(function(item, tabIndex, array) {
    item.addEventListener('click', (event) => {      
        array.forEach((el, index) => {
            if (index != tabIndex) {
                el.classList.remove("tab_active");
                tabsContent[index].classList.remove("tab__content_active");
            } else {
                el.classList.add("tab_active");
                tabsContent[index].classList.add("tab__content_active");
            }                
        });
    });
});

