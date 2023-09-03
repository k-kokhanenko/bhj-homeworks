
document.addEventListener("DOMContentLoaded", () => {

    const div = document.createElement('div');
    div.classList.add('tooltip');    
    //document.body.appendChild(div);
    //document.body.insertBefore(div, document.body.firstChild);
    
    document.querySelectorAll('.has-tooltip').forEach(function(item) {        
        item.addEventListener( "click" , (event) => {
            event.preventDefault();

            div.textContent = item.title;
            div.classList.add('tooltip_active');
            //console.log(div);

            item.appendChild(div);
        });
    });
});

