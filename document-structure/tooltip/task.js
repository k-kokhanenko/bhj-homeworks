
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.has-tooltip').forEach(function(item, index) {    
        const div = document.createElement('div');
        div.classList.add('tooltip');        
        item.parentNode.insertBefore(div, item.nextSibling);
        
        item.addEventListener( "click" , (event) => {
            event.preventDefault();
            
            console.log('index - ' + index);
            document.querySelectorAll('.tooltip').forEach(function(item2, index2) {   
                if (index != index2 && item2.classList.contains('tooltip_active')) {
                    item2.classList.remove('tooltip_active');
                }
            }); 
            
            let rect = item.getBoundingClientRect();          
            const tooltip = item.nextElementSibling;
            if (tooltip) {
                tooltip.textContent = item.title;
                tooltip.style.cssText = `left: ${rect.x}px; top: ${rect.y+rect.height}px;`;
                tooltip.classList.toggle('tooltip_active');     
            }
        });
    });
});



